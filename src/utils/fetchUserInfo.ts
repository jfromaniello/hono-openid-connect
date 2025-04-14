import { Context } from 'hono';
import type { UserinfoResponse } from 'openid-client';
import { OidcClientConfig } from '../types/config';

/**
 * Fetch user info from the OIDC provider
 */
export async function fetchUserInfo(c: Context): Promise<UserinfoResponse> {
  const { oidcClient } = c.var.oidcConfig as OidcClientConfig;
  const accessToken = c.var.oidc.accessToken?.token;

  if (!accessToken) {
    throw new Error('No access token available');
  }

  if (!c.var.oidc.user.sub) {
    throw new Error('No user sub claim available');
  }

  try {
    // Fetch user info from the provider
    return await oidcClient.userinfo(accessToken);
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw new Error(`Failed to fetch user info: ${error}`);
  }
}
