import { Context, MiddlewareHandler, Next } from 'hono';
import { OidcClientConfig } from '../types/config';

/**
 * Middleware to check if user is authenticated
 */
export function requiresAuth(): MiddlewareHandler {
  return async (c: Context, next: Next) => {
    // Check if user is authenticated
    if (!c.var.oidc?.isAuthenticated) {
      // Get the login route from config
      const { config } = c.var.oidcConfig as OidcClientConfig;
      const loginRoute = config.routes?.login || '/login';

      // Redirect to login with returnTo parameter
      const returnTo = c.req.url;
      const loginUrl = `${loginRoute}?returnTo=${encodeURIComponent(returnTo)}`;
      return c.redirect(loginUrl);
    }

    // Continue if authenticated
    return next();
  };
}
