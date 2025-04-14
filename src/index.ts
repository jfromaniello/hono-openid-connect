// Export core middleware
export { auth } from './auth';
export { claimEquals } from './middleware/claimEquals';
export { requiresAuth } from './middleware/requiresAuth';

// Export utility functions
export { callback } from './utils/callback';
export { fetchUserInfo } from './utils/fetchUserInfo';
export { login } from './utils/login';
export { logout } from './utils/logout';
export { refreshToken } from './utils/refreshToken';

// Export types
export type { OidcConfig, OidcContext, OidcSession } from './types/config';

export type { AuthorizationParameters, TokenSet, UserinfoResponse } from 'openid-client';
