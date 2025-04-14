import { Context } from 'hono';
import { Session } from 'hono-sessions';
import { OidcClientConfig, OidcSession } from '../types/config';

/**
 * Handle OIDC callback
 */
export async function callback(
  c: Context,
  options?: {
    redirectUri?: string;
  }
): Promise<Response> {
  const { config, oidcClient } = c.var.oidcConfig as OidcClientConfig;

  try {
    // Determine the redirect URI
    const redirectUri =
      options?.redirectUri || `${config.baseURL}${config.routes?.callback || '/callback'}`;

    // Get the session
    const session = c.get('session') as Session;

    // Retrieve stored state and nonce from session
    const storedState = session.get('oidc:state');
    const storedNonce = session.get('oidc:nonce');

    // Clear sensitive data from session - only used once
    session.set('oidc:state', undefined);
    session.set('oidc:nonce', undefined);

    // Get the callback parameters
    const callbackParams = oidcClient.callbackParams(c.req.raw);

    // Get the state parameter
    let state: string | undefined = undefined;

    if (c.req.method === 'POST') {
      const body = await c.req.parseBody();
      state = (body.state as string) || undefined;
    } else {
      state = c.req.query('state') || undefined;
    }

    // Verify the state parameter
    if (!storedState || !state || storedState.value !== state) {
      console.error('State parameter validation failed');
      return c.text('Authentication failed: Invalid state parameter', 400);
    }

    // Process the callback response
    const tokenSet = await oidcClient.callback(redirectUri, callbackParams, {
      state,
      nonce: storedNonce,
    });

    // Verify nonce in the ID token if it exists
    const claims = tokenSet.claims();
    if (storedNonce && (!claims.nonce || claims.nonce !== storedNonce)) {
      console.error('Nonce validation failed');
      return c.text('Authentication failed: Invalid nonce', 400);
    }

    // Extract user info from ID token
    const idToken = tokenSet.id_token;

    // Create the user profile
    const user = {
      sub: claims.sub,
      ...claims,
    };

    // Create the OIDC session
    const oidcSession: OidcSession = {
      user,
      idToken,
    };

    // Add access token if available
    if (tokenSet.access_token) {
      oidcSession.accessToken = {
        token: tokenSet.access_token,
        token_type: tokenSet.token_type || 'Bearer',
        expires_at: tokenSet.expires_at || 0,
        isExpired: () => tokenSet.expired?.() || false,
      };
    }

    // Add refresh token if available
    if (tokenSet.refresh_token) {
      oidcSession.refreshToken = tokenSet.refresh_token;
    }

    // Apply afterCallback hook if provided
    if (config.afterCallback) {
      const result = await config.afterCallback(c, oidcSession);
      session.set('oidc', result);
    } else {
      session.set('oidc', oidcSession);
    }

    // Redirect to the original URL or home
    const returnTo = storedState.returnTo || '/';
    return c.redirect(returnTo);
  } catch (error) {
    console.error('Callback Error:', error);
    return c.text('Authentication Error', 401);
  }
}
