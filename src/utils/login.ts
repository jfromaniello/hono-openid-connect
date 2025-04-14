import { Context } from 'hono';
import { AuthorizationParameters } from 'openid-client';
import { Session } from 'hono-sessions';
import { randomNonce, randomState } from 'openid-client';
/**
 * Initiate login process
 */
export function login(
  c: Context,
  options?: {
    returnTo?: string;
    authorizationParams?: AuthorizationParameters;
  }
): Response {
  const { config, oidcClient } = c.var.oidcConfig;
  const returnTo = options?.returnTo || '/';

  // Generate secure random values for state and nonce
  const state = randomState();
  const nonce = randomNonce();

  // Get the session
  const session = c.get('session') as Session;

  // Store state and nonce in the session
  session.set('oidc:state', {
    value: state,
    returnTo,
  });
  session.set('oidc:nonce', nonce);

  // Configure authorization parameters
  const authParams = {
    ...(config.authorizationParams ?? {}),
    ...(options?.authorizationParams ?? {}),
    redirect_uri: `${config.baseURL}${config.routes?.callback || '/callback'}`,
    state,
    nonce,
  };

  // Create authorization URL
  const authUrl = oidcClient.authorizationUrl(authParams);

  // Redirect to the authorization URL
  return c.redirect(authUrl);
}
