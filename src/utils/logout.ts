import { Context } from 'hono';
import { Session } from 'hono-sessions';
import { OidcClientConfig } from '../types/config';

/**
 * Log out user
 */
export function logout(
  c: Context,
  options?: {
    returnTo?: string;
  }
): Response {
  const { config, oidcClient } = c.var.oidcConfig as OidcClientConfig;
  const session = c.get('session') as Session;
  const oidcSession = session?.get('oidc');

  // Clear the session
  if (session && oidcSession) {
    session.set('oidc', undefined);
  }

  // Handle IdP logout if enabled
  if (config.idpLogout && oidcSession?.idToken) {
    const postLogoutRedirectUri =
      options?.returnTo || config.routes?.postLogoutRedirect || config.baseURL || '/';

    // Build the end session URL
    const endSessionUrl = oidcClient.endSessionUrl({
      id_token_hint: oidcSession.idToken,
      post_logout_redirect_uri: postLogoutRedirectUri,
    });

    return c.redirect(endSessionUrl);
  }

  // If not doing IdP logout, just redirect to the specified URL
  const returnTo = options?.returnTo || '/';
  return c.redirect(returnTo);
}
