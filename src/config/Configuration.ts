import { OIDCAuthorizationRequestParams } from "@/config/authRequest.js";
import { SessionOptions } from "@jfromaniello/hono-sessions";

type Routes = {
  login: string;
  logout: string;
  callback: string;
};

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
   * Use this setting to prevent the default routes from being installed.
   *
   * @default []
   */
  customRoutes: (keyof Routes)[];

  /**
   * Routes options.
   *
   * @default {
   *   login: '/login',
   *   logout: '/logout',
   *   callback: '/callback',
   * }
   */
  routes: Routes;

  /**
   * Additional authorization request parameters that will be included in
   * the authorization URL.
   *
   * @default {
   *  response_type: 'id_token',
   *  scope: 'openid profile email',
   *  response_mode: 'form_post',
   * }
   */
  authorizationParams: Partial<OIDCAuthorizationRequestParams>;

  /**
   * Additional parameters that will be sent to the
   * token endpoint, typically used for parameters such as `resource`
   * in cases where multiple resource indicators were requested but
   * the authorization server only supports issuing an access token
   * with a single audience
   */
  tokenEndpointParams?: Record<string, string>;

  /**
   * Whether to use pushed authorization requests.
   * @default false
   */
  pushedAuthorizationRequests: boolean;

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
  // afterCallback?: (
  //   c: Context,
  //   session: OidcSession,
  //   state: any,
  // ) => Promise<OIDCUserInfoResponse> | OIDCUserInfoResponse;

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
    | "client_secret_basic"
    | "client_secret_post"
    | "client_secret_jwt"
    | "private_key_jwt"
    | "none";

  /**
   * The client assertion signing key.
   * Required if `clientAuthMethod` is `private_key_jwt`.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clientAssertionSigningKey?: any;

  /**
   * The client assertion signing algorithm.
   * Required if `clientAuthMethod` is `private_key_jwt`.
   * @default 'RS256'
   */
  clientAssertionSigningAlg?:
    | "RS256"
    | "RS384"
    | "RS512"
    | "PS256"
    | "PS384"
    | "PS512"
    | "ES256"
    | "ES256K"
    | "ES384"
    | "ES512"
    | "EdDSA";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logoutParams?: Record<string, any>;

  /**
   * Logger function to use for the OIDC client.
   * @param message - The message to log.
   * @param metadata - Additional metadata to include in the log.
   */
  debug: (message: string, metadata?: Record<string, unknown>) => void;
}

// Type for the required fields that must be provided in InitConfiguration
type RequiredConfigFields = "issuerBaseURL" | "baseURL" | "clientID";

// Type for the optional session field that should be partial in InitConfiguration
type SessionField = {
  session?: false | Partial<SessionOptions>;
};

// Type for the optional routes field that should be partial in InitConfiguration
type RoutesField = {
  routes?: Partial<Routes>;
};

/**
 * Configuration type for initializing the OIDC client.
 * This represents the input before validation, where most properties are optional
 * since they have defaults in the schema.
 */
export type InitConfiguration = Pick<Configuration, RequiredConfigFields> &
  Partial<Omit<Configuration, RequiredConfigFields | "session" | "routes">> &
  SessionField &
  RoutesField;
