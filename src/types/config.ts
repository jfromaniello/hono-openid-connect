import { Context } from 'hono';

// Extend the Hono context to include OIDC context
declare module 'hono' {
  interface ContextVariableMap {
    oidc: OidcContext;
    oidcConfig: OidcClientConfig;
  }
}

export interface OidcSession {
  user: UserinfoResponse;
  idToken: string;
  accessToken?: {
    token: string;
    token_type: string;
    expires_at: number;
    isExpired: () => boolean;
  };
  refreshToken?: string;
}

export interface OidcContext {
  isAuthenticated: boolean;
  user: UserinfoResponse;
  idToken: string;
  accessToken?: {
    token: string;
    token_type: string;
    expires_at: number;
    isExpired: () => boolean;
  };
  refreshToken?: string;
}

// For internal use
export interface OidcClientConfig {
  config: OidcConfig;
  oidcClient: any;
}

export interface LogoutToken {
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  jti: string;
  events: {
    'http://schemas.openid.net/event/backchannel-logout': {};
  };
  sid?: string;
}
