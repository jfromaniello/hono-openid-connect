import { Context, MiddlewareHandler, Next } from 'hono';
import { OidcClientConfig } from '../types/config';

/**
 * Middleware to check if a claim equals a specific value
 */
export function claimEquals(claim: string, value: any): MiddlewareHandler {
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

    // Check if the claim exists and equals the specified value
    if (c.var.oidc.user[claim] !== value) {
      return c.text('Forbidden: Insufficient permissions', 403);
    }

    // Continue if claim matches
    return next();
  };
}
