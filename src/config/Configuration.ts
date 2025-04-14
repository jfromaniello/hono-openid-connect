import { Context } from 'hono';
import { SessionOptions } from 'hono-sessions';
import { authorizationCodeGrant } from 'openid-client';
import { getLoginState } from '../hooks/getLoginState';
import { OIDCAuthorizationRequestParams } from '../types/authRequest';
import { OidcSession } from '../types/config';

export interface Configuration {
  /**
   * The base URL of the OIDC provider.
   */
  issuerBaseURL: string;

  /**
   * The base URL of the application.
   */
  baseURL: string;

  /**
   * The client ID of the application.
   */
  clientID: string;

  /**
   * The client secret of the application.
   */
  clientSecret?: string;

  /**
   * Whether to require authentication for all routes.
   * @default true
   */
  authRequired: boolean;

  /**
   * Whether to use Auth0 specific logic for federated logout.
   * @default false
   */
  auth0Logout: boolean;

  /**
   * Whether to use the IDP's logout endpoint.
   * @default false
   */
  idpLogout: boolean;

  /**
   * hono-sessions options.
   *
   * @default {
   *  store: new CookieStore(),
   *  sessionCookieName: 'appSession',
   *  cookieOptions: {
   *    sameSite: 'Lax',
   *    path: '/',
   *    httpOnly: true,
   *  }
   * }
   */
  session: false | SessionOptions;

  /**
   * Routes options.
   *
   * @default {
   *   login: '/login',
   *   logout: '/logout',
   *   callback: '/callback',
   *   postLogoutRedirect: '/'
   * }
   */
  routes: {
    login: string | false;
    logout: string | false;
    callback: string | false;
    postLogoutRedirect: string | false;
    backchannelLogout: string | false;
  };

  /**
   * Additional authorization request parameters that will be included in
   * the authorization URL.
   */
  authorizationParams?: Partial<OIDCAuthorizationRequestParams>;

  /**
   * Additional parameters that will be sent to the
   * token endpoint, typically used for parameters such as `resource`
   * in cases where multiple resource indicators were requested but
   * the authorization server only supports issuing an access token
   * with a single audience
   */
  tokenEndpointParams?: Parameters<typeof authorizationCodeGrant>[3];

  /**
   * Whether to use pushed authorization requests.
   * @default false
   */
  pushedAuthorizationRequests: boolean;

  /**
   * Enable backchannel logout by setting the URL
   * of the backchannel logout endpoint.
   * @default false
   */
  backchannelLogout:
    | boolean
    | {
        isLoggedOut: boolean | (() => Promise<boolean>);
        onLogoutToken: (token: string) => Promise<void>;
      };

  /**
   * The clock tolerance for the OIDC client.
   * @default 60
   */
  clockTolerance: number;

  /**
   * Whether to enable telemetry.
   * @default true
   */
  enableTelemetry: boolean;

  /**
   * The HTTP timeout for the OIDC client.
   * @default 5000
   */
  httpTimeout?: number;

  // Hooks
  afterCallback?: (c: Context, session: OidcSession) => Promise<OidcSession> | OidcSession;
  getLoginState: getLoginState;

  /**
   * The method to use for client authentication.
   *
   * If `authorizationParams.response_type` is `id_token` and !pushedAuthorizationRequests,
   * the @default is `none`.
   *
   * If `clientAssertionSigningKey` is provided,
   *  the @default is `private_key_jwt`.
   *
   * Otherwise, the @default is `client_secret_basic`.
   */
  clientAuthMethod:
    | 'client_secret_basic'
    | 'client_secret_post'
    | 'client_secret_jwt'
    | 'private_key_jwt'
    | 'none';

  /**
   * The client assertion signing key.
   * Required if `clientAuthMethod` is `private_key_jwt`.
   */
  clientAssertionSigningKey?: any;

  /**
   * The client assertion signing algorithm.
   * Required if `clientAuthMethod` is `private_key_jwt`.
   * @default 'RS256'
   */
  clientAssertionSigningAlg?:
    | 'RS256'
    | 'RS384'
    | 'RS512'
    | 'PS256'
    | 'PS384'
    | 'PS512'
    | 'ES256'
    | 'ES256K'
    | 'ES384'
    | 'ES512'
    | 'EdDSA';

  /**
   * Returns 401 if the user is not authenticated.
   * @default false
   */
  errorOnRequiredAuth: boolean;

  /**
   * Whether to attempt a silent login.
   * @default false
   */
  attemptSilentLogin: boolean;

  /**
   * The claims to exclude from the user identity.
   * @default ['aud', 'iss', 'iat', 'exp', 'nbf', 'nonce', 'azp', 'auth_time', 's_hash', 'at_hash', 'c_hash']
   */
  excludedClaims: string[];

  /**
   * The expected signing algorithm for the ID token.
   * @default 'RS256'
   */
  idTokenSigningAlg: string;

  /**
   * The maximum age of the discovery cache.
   * @default 10 * 60 * 1000
   */
  discoveryCacheMaxAge: number;

  /**
   * The HTTP user agent to use for the OIDC client.
   * @default 'hono-openid-connect'
   */
  httpUserAgent: string;

  /**
   * The fetch function to use for the OIDC client.
   * @default globalThis.fetch
   */
  fetch: typeof globalThis.fetch;

  /**
   * Additional parameters that will be sent to the
   * logout endpoint.
   */
  logoutParams?: Record<string, any>;
}

// Type for the required fields that must be provided in InitConfiguration
type RequiredConfigFields = 'issuerBaseURL' | 'baseURL' | 'clientID';

// Type for the optional session field that should be partial in InitConfiguration
type SessionField = {
  session?: false | Partial<SessionOptions>;
};

// Type for the optional routes field that should be partial in InitConfiguration
type RoutesField = {
  routes?: Partial<{
    login: string | false;
    logout: string | false;
    callback: string | false;
    postLogoutRedirect: string | false;
    backchannelLogout: string | false;
  }>;
};

/**
 * Configuration type for initializing the OIDC client.
 * This represents the input before validation, where most properties are optional
 * since they have defaults in the schema.
 */
export type InitConfiguration = Pick<Configuration, RequiredConfigFields> &
  Partial<Omit<Configuration, RequiredConfigFields | 'session' | 'routes'>> &
  SessionField &
  RoutesField;
