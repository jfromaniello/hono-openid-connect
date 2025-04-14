import { Context } from 'hono';
import { Session } from 'hono-sessions';
import { OidcClientConfig } from '../types/config';

/**
 * Refresh the access token
 */
export async function refreshToken(c: Context): Promise<{
  token: string;
  token_type: string;
  expires_at: number;
  isExpired: () => boolean;
}> {
  const { oidcClient } = c.var.oidcConfig as OidcClientConfig;
  const session = c.get('session') as Session;
  const oidcSession = session?.get('oidc');

  if (!oidcSession?.refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    // Refresh the token
    const tokenSet = await oidcClient.refresh(oidcSession.refreshToken);

    // Update the session with new tokens
    const updatedSession = { ...oidcSession };

    // Update access token
    if (tokenSet.access_token) {
      updatedSession.accessToken = {
        token: tokenSet.access_token,
        token_type: tokenSet.token_type || 'Bearer',
        expires_at: tokenSet.expires_at || 0,
        isExpired: () => tokenSet.expired?.() || false,
      };
    }

    // Update refresh token if a new one was provided
    if (tokenSet.refresh_token) {
      updatedSession.refreshToken = tokenSet.refresh_token;
    }

    // Update ID token if a new one was provided
    if (tokenSet.id_token) {
      updatedSession.idToken = tokenSet.id_token;
      // Update user claims if we got a new ID token
      const claims = tokenSet.claims();
      if (claims) {
        updatedSession.user = {
          ...updatedSession.user,
          ...claims,
        };
      }
    }

    // Save the updated session
    session.set('oidc', updatedSession);

    // Update the context
    c.set('oidc', {
      ...c.var.oidc,
      accessToken: updatedSession.accessToken,
      refreshToken: updatedSession.refreshToken,
      idToken: updatedSession.idToken,
      user: updatedSession.user,
    });

    return updatedSession.accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw new Error(`Failed to refresh token: ${error}`);
  }
}
