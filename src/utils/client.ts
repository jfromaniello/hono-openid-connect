import { CookieStore } from 'hono-sessions';
import Joi from 'joi';
import * as oidc from 'openid-client';
import { defaultState } from '../hooks/getLoginState';
import { OidcClientConfig, OidcConfig } from '../types/config';
const isHttps = /^https:/i;

const paramsSchema = Joi.object({
  secret: Joi.alternatives([
    Joi.string().min(8),
    Joi.binary().min(8),
    Joi.array().items(Joi.string().min(8), Joi.binary().min(8)),
  ]).required(),
  session: Joi.alternatives([
    false,
    Joi.object({
      store: Joi.object().required().default(new CookieStore()),
      encryptionKey: Joi.string().min(32),
      expireAfterSeconds: Joi.number().optional(),
      sessionCookieName: Joi.string().optional().default('appSession'),
      cookieOptions: Joi.object({
        domain: Joi.string().optional(),
        sameSite: Joi.string().valid('Lax', 'Strict', 'None').optional().default('Lax'),
        path: Joi.string().optional().default('/'),
        httpOnly: Joi.boolean().optional().default(true),
        secure: Joi.when(Joi.ref('/baseURL'), {
          is: Joi.string().pattern(isHttps),
          then: Joi.boolean()
            .default(true)
            .custom((value, { warn }) => {
              if (!value) warn('insecure.cookie');
              return value;
            })
            .messages({
              'insecure.cookie':
                "Setting your cookie to insecure when over https is not recommended, I hope you know what you're doing.",
            }),
          otherwise: Joi.boolean().valid(false).default(false).messages({
            'any.only': 'Cookies set with the `Secure` property wont be attached to http requests',
          }),
        }),
        maxAge: Joi.number().optional(),
        sessionCookieName: Joi.string().optional().default('session'),
      })
        .required()
        .default({}),
    }).required(),
  ]),
  auth0Logout: Joi.boolean().optional(),
  tokenEndpointParams: Joi.object().optional(),
  authorizationParams: Joi.object({
    response_type: Joi.string()
      .optional()
      .valid('id_token', 'code id_token', 'code')
      .default('id_token'),
    scope: Joi.string()
      .optional()
      .pattern(/\bopenid\b/, 'contains openid')
      .default('openid profile email'),
    response_mode: Joi.string()
      .optional()
      .when('response_type', {
        is: 'code',
        then: Joi.valid('query', 'form_post'),
        otherwise: Joi.valid('form_post').default('form_post'),
      }),
  })
    .optional()
    .unknown(true)
    .default(),
  logoutParams: Joi.object().optional(),
  backchannelLogout: Joi.alternatives([
    Joi.object({
      isLoggedOut: Joi.alternatives([Joi.function(), false]).optional().default(false),
      onLogoutToken: Joi.function().optional(),
    }),
    Joi.boolean(),
  ]).default(false),
  baseURL: Joi.string()
    .uri()
    .required()
    .when(Joi.ref('authorizationParams.response_mode'), {
      is: 'form_post',
      then: Joi.string().pattern(isHttps).rule({
        warn: true,
        message:
          "Using 'form_post' for response_mode may cause issues for you logging in over http, see https://github.com/auth0/express-openid-connect/blob/master/FAQ.md",
      }),
    }),
  clientID: Joi.string().required(),
  clientSecret: Joi.string()
    .when(
      Joi.ref('clientAuthMethod', {
        adjust: value => value && value.includes('client_secret'),
      }),
      {
        is: true,
        then: Joi.string().required().messages({
          'any.required':
            '"clientSecret" is required for the "clientAuthMethod" "{{clientAuthMethod}}"',
        }),
      }
    )
    .when(
      Joi.ref('idTokenSigningAlg', {
        adjust: value => value && value.startsWith('HS'),
      }),
      {
        is: true,
        then: Joi.string().required().messages({
          'any.required': '"clientSecret" is required for ID tokens with HMAC based algorithms',
        }),
      }
    ),
  clockTolerance: Joi.number().optional().default(60),
  enableTelemetry: Joi.boolean().optional().default(true),
  errorOnRequiredAuth: Joi.boolean().optional().default(false),
  attemptSilentLogin: Joi.boolean().optional().default(false),
  getLoginState: Joi.function()
    .optional()
    .default(() => defaultState),
  afterCallback: Joi.function().optional(),
  excludedClaims: Joi.array()
    .optional()
    .default([
      'aud',
      'iss',
      'iat',
      'exp',
      'nbf',
      'nonce',
      'azp',
      'auth_time',
      's_hash',
      'at_hash',
      'c_hash',
    ]),
  idpLogout: Joi.boolean()
    .optional()
    .default(parent => parent.auth0Logout || false),
  idTokenSigningAlg: Joi.string().insensitive().not('none').optional().default('RS256'),
  issuerBaseURL: Joi.string().uri().required(),
  legacySameSiteCookie: Joi.boolean().optional().default(true),
  authRequired: Joi.boolean().optional().default(true),
  pushedAuthorizationRequests: Joi.boolean().optional().default(false),
  routes: Joi.object({
    login: Joi.alternatives([
      Joi.string().uri({ relativeOnly: true }),
      Joi.boolean().valid(false),
    ]).default('/login'),
    logout: Joi.alternatives([
      Joi.string().uri({ relativeOnly: true }),
      Joi.boolean().valid(false),
    ]).default('/logout'),
    callback: Joi.alternatives([
      Joi.string().uri({ relativeOnly: true }),
      Joi.boolean().valid(false),
    ]).default('/callback'),
    postLogoutRedirect: Joi.string().uri({ allowRelative: true }).default('/'),
    backchannelLogout: Joi.string().uri({ allowRelative: true }).default('/backchannel-logout'),
  })
    .default()
    .unknown(false),
  clientAuthMethod: Joi.string()
    .valid(
      'client_secret_basic',
      'client_secret_post',
      'client_secret_jwt',
      'private_key_jwt',
      'none'
    )
    .optional()
    .default(parent => {
      if (
        parent.authorizationParams.response_type === 'id_token' &&
        !parent.pushedAuthorizationRequests
      ) {
        return 'none';
      }
      if (parent.clientAssertionSigningKey) {
        return 'private_key_jwt';
      }
      return 'client_secret_basic';
    })
    .when(
      Joi.ref('authorizationParams.response_type', {
        adjust: value => value && value.includes('code'),
      }),
      {
        is: true,
        then: Joi.string().invalid('none').messages({
          'any.only': 'Public code flow clients are not supported.',
        }),
      }
    )
    .when(Joi.ref('pushedAuthorizationRequests'), {
      is: true,
      then: Joi.string().invalid('none').messages({
        'any.only': 'Public PAR clients are not supported.',
      }),
    }),
  clientAssertionSigningKey: Joi.any()
    .optional()
    .when(Joi.ref('clientAuthMethod'), {
      is: 'private_key_jwt',
      then: Joi.any().required().messages({
        'any.required':
          '"clientAssertionSigningKey" is required for a "clientAuthMethod" of "private_key_jwt"',
      }),
    }), // <Object> | <string> | <Buffer> | <KeyObject>,
  clientAssertionSigningAlg: Joi.string()
    .valid(
      'RS256',
      'RS384',
      'RS512',
      'PS256',
      'PS384',
      'PS512',
      'ES256',
      'ES256K',
      'ES384',
      'ES512',
      'EdDSA'
    )
    .optional(),
  discoveryCacheMaxAge: Joi.number()
    .optional()
    .min(0)
    .default(10 * 60 * 1000),
  httpTimeout: Joi.number().optional().min(500).default(5000),
  httpUserAgent: Joi.string().optional().default('hono-openid-connect'),
  fetch: Joi.function().optional(),
  responseType: Joi.alternatives()
    .try(
      Joi.array().items(Joi.string().valid('code', 'id_token', 'token').required()),
      Joi.string().valid('code', 'id_token', 'token')
    )
    .default('code'),
});

// Cache for OIDC clients
const clientCache = new Map<string, OidcClientConfig>();

/**
 * Initialize the OpenID Connect client
 */
export async function initializeOidcClient(config: Partial<OidcConfig>): Promise<OidcClientConfig> {
  // Apply default values to config
  const configWithDefaults: OidcConfig = {
    ...config,
    routes: {
      ...DEFAULT_ROUTES,
      ...config.routes,
    },
    authorizationParams: {
      ...DEFAULT_AUTH_PARAMS,
      ...config.authorizationParams,
    },
    authRequired: config.authRequired ?? true,
    clockTolerance: config.clockTolerance || DEFAULT_CLOCK_TOLERANCE,
    httpTimeout: config.httpTimeout || DEFAULT_HTTP_TIMEOUT,
  };

  // Use environment variables if values not provided
  const issuerBaseURL = configWithDefaults.issuerBaseURL || process.env.ISSUER_BASE_URL;
  const baseURL = configWithDefaults.baseURL || process.env.BASE_URL;
  const clientID = configWithDefaults.clientID || process.env.CLIENT_ID;
  const clientSecret = configWithDefaults.clientSecret || process.env.SECRET;

  if (!issuerBaseURL) {
    throw new Error('Missing required config: issuerBaseURL');
  }

  if (!baseURL) {
    throw new Error('Missing required config: baseURL');
  }

  if (!clientID) {
    throw new Error('Missing required config: clientID');
  }

  // Generate a cache key for this configuration
  const cacheKey = `${issuerBaseURL}:${clientID}`;

  // Return cached client if it exists
  if (clientCache.has(cacheKey)) {
    return clientCache.get(cacheKey)!;
  }

  try {
    oidc.buildAuthorizationUrl();
    // Discover the OpenID Connect provider
    const config = await oidc.discovery(new URL(issuerBaseURL), clientID, {
      client_secret: clientSecret,
    });

    // // Create a new client
    // const client = new oidc.Configuration({
    //   client_id: clientID,
    //   client_secret: clientSecret,
    //   redirect_uris: [`${baseURL}${configWithDefaults.routes.callback}`],
    //   response_types: [configWithDefaults.authorizationParams?.response_type ?? 'id_token'],
    // });

    // // Set the client options
    // client.clock_tolerance = configWithDefaults.clockTolerance;

    // Create the final client configuration with default values applied
    const clientConfig: OidcClientConfig = {
      config: {
        ...configWithDefaults,
        issuerBaseURL,
        baseURL,
        clientID,
        clientSecret,
      },
      oidcClient: client,
    };

    // Cache the client for future use
    clientCache.set(cacheKey, clientConfig);

    return clientConfig;
  } catch (error) {
    console.error('Failed to initialize OIDC client:', error);
    throw new Error(`Could not initialize OIDC client: ${error}`);
  }
}
