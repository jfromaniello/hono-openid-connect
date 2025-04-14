import { Context, MiddlewareHandler, Next } from 'hono';
import { Session, sessionMiddleware } from 'hono-sessions';
import { every } from 'hono/combine';
import { OidcClientConfig, OidcConfig, OidcContext } from './types/config';
import { initializeOidcClient } from './utils/client';
/**
 * Main auth middleware function
 */
export function auth(config: OidcConfig = {}): MiddlewareHandler {
  // Initialize session middleware if needed
  let sessionMiddlewareHandler: MiddlewareHandler | null = null;
  if (config.session !== false) {
    //TODO
    // const sessionHandler =
    //   typeof config.session === 'object'
    //     ? config.session
    //     : {
    //         store: new CookieStore(config.session as any),
    //         ...config.session,
    //       };

    sessionMiddlewareHandler = sessionMiddleware(sessionHandler);
  }

  // Main OIDC middleware function
  const oidcMiddleware: MiddlewareHandler = async (
    c: Context,
    next: Next
  ): Promise<Response | void> => {
    try {
      // Initialize the OIDC client with defaults
      const clientConfig = await initializeOidcClient(config);
      c.set('oidcConfig', clientConfig as any);

      // Use destructuring with defaults to ensure routes is always defined
      const { routes = {}, backchannelLogout = false, authRequired = true } = clientConfig.config;
      const { login = '/login', callback = '/callback', logout = '/logout' } = routes;

      // Handle login route
      if (login !== false && c.req.path === login) {
        return handleLogin(c);
      }

      // Handle callback route
      if (callback !== false && c.req.path === callback) {
        return handleCallback(c);
      }

      // Handle logout route
      if (logout !== false && c.req.path === logout) {
        return handleLogout(c);
      }

      // Handle backchannel logout if enabled
      if (backchannelLogout && c.req.path === '/backchannel-logout') {
        return handleBackchannelLogout(c);
      }

      // Check if there's a valid session
      const session = c.get('session') as Session | undefined;
      const oidcSession = session?.get('oidc');

      // Set up the OIDC context
      if (oidcSession) {
        const oidcContext: OidcContext = {
          isAuthenticated: true,
          user: oidcSession.user,
          idToken: oidcSession.idToken,
          accessToken: oidcSession.accessToken,
          refreshToken: oidcSession.refreshToken,
        };
        c.set('oidc', oidcContext);
      } else {
        c.set('oidc', {
          isAuthenticated: false,
          user: {},
          idToken: '',
        } as OidcContext);
      }

      // Handle unauthenticated requests
      if (authRequired && !c.var.oidc.isAuthenticated) {
        const returnTo = c.req.url;
        const loginUrl = `${login}?returnTo=${encodeURIComponent(returnTo)}`;
        return c.redirect(loginUrl);
      }

      // Continue to the next middleware or route handler
      return next();
    } catch (error) {
      console.error('OIDC Middleware Error:', error);
      return c.text('Internal Server Error', 500);
    }
  };

  // Return array of middlewares or just the OIDC middleware
  if (sessionMiddlewareHandler) {
    return every(sessionMiddlewareHandler, oidcMiddleware);
  }
  return oidcMiddleware;
}

/**
 * Handle login requests
 */
async function handleLogin(c: Context): Promise<Response> {
  const { config, oidcClient } = c.var.oidcConfig as OidcClientConfig;
  const returnTo = c.req.query('returnTo') || '/';

  // Use destructuring with defaults to ensure properties exist
  const { baseURL = '', routes = {} } = config;
  const { callback = '/callback' } = routes;
  const authorizationParams = config.authorizationParams || {};

  // Get authorization URL from the OIDC client
  const authUrl = oidcClient.authorizationUrl({
    ...authorizationParams,
    redirect_uri: `${baseURL}${callback}`,
    state: returnTo,
  });

  return c.redirect(authUrl);
}

/**
 * Handle callback from the OIDC provider
 */
async function handleCallback(c: Context): Promise<Response> {
  const { config, oidcClient } = c.var.oidcConfig as OidcClientConfig;

  try {
    // Use destructuring with defaults to ensure properties exist
    const { baseURL = '', routes = {} } = config;
    const { callback = '/callback' } = routes;

    // Handle the authorization callback
    let params: URLSearchParams;
    if (c.req.method === 'POST') {
      // Form post mode
      const formData = await c.req.parseBody();
      params = new URLSearchParams();
      for (const [key, value] of Object.entries(formData)) {
        if (typeof value === 'string') {
          params.append(key, value);
        }
      }
    } else {
      // Query parameter mode
      params = new URLSearchParams(c.req.url.split('?')[1] || '');
    }

    // Get the callback parameters
    const callbackParams = oidcClient.callbackParams(c.req.raw);

    // Process the tokens from the callback
    const tokenSet = await oidcClient.callback(`${baseURL}${callback}`, callbackParams, {
      state: params.get('state') || undefined,
    });

    // Extract user info from ID token
    const idToken = tokenSet.id_token;
    const claims = tokenSet.claims();

    // Create the session
    const session = c.get('session') as Session;

    // Create the user profile
    const user = {
      sub: claims.sub,
      ...claims,
    };

    // Create the OIDC session
    const oidcSession = {
      user,
      idToken,
    };

    // Add access token if available
    if (tokenSet.access_token) {
      Object.assign(oidcSession, {
        accessToken: {
          token: tokenSet.access_token,
          token_type: tokenSet.token_type || 'Bearer',
          expires_at: tokenSet.expires_at || 0,
          isExpired: () => tokenSet.expired?.() || false,
        },
      });
    }

    // Add refresh token if available
    if (tokenSet.refresh_token) {
      Object.assign(oidcSession, {
        refreshToken: tokenSet.refresh_token,
      });
    }

    // Apply afterCallback hook if provided
    if (config.afterCallback) {
      const result = await config.afterCallback(c, oidcSession);
      session.set('oidc', result);
    } else {
      session.set('oidc', oidcSession);
    }

    // Redirect to the original URL or home
    const state = params.get('state');
    return c.redirect(state || '/');
  } catch (error) {
    console.error('Callback Error:', error);
    return c.text('Authentication Error', 401);
  }
}

/**
 * Handle logout requests
 */
async function handleLogout(c: Context): Promise<Response> {
  const { config, oidcClient } = c.var.oidcConfig as OidcClientConfig;
  const session = c.get('session') as Session;
  const oidcSession = session?.get('oidc');

  // Use destructuring with defaults to ensure properties exist
  const { baseURL = '', routes = {}, idpLogout = false } = config;
  const { postLogoutRedirect = baseURL || '/' } = routes;

  // Clear the session
  if (oidcSession) {
    session.set('oidc', undefined);
  }

  // Handle IdP logout if enabled
  if (idpLogout && oidcSession?.idToken) {
    // Build the end session URL
    const endSessionUrl = oidcClient.endSessionUrl({
      id_token_hint: oidcSession.idToken,
      post_logout_redirect_uri: postLogoutRedirect,
    });

    return c.redirect(endSessionUrl);
  }

  // If not doing IdP logout, just redirect to home
  const returnTo = c.req.query('returnTo') || '/';
  return c.redirect(returnTo);
}

/**
 * Handle backchannel logout
 */
async function handleBackchannelLogout(c: Context): Promise<Response> {
  // This would be implemented for services that support backchannel logout
  // For now, return a simple 200 response
  return c.text('Backchannel logout processed', 200);
}
