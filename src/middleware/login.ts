import { OIDCAuthorizationRequestParams } from "@/config/authRequest.js";
import { getConfiguration } from "@/config/index.js";
import { OIDCEnv } from "@/lib/honoEnv.js";
import { toSearchParams, validateRedirectUrl } from "@/utils/util.js";
import { createMiddleware } from "hono/factory";
import * as oidc from "openid-client";

export type LoginParams = {
  /**
   * The URL to redirect to after login.
   * This is stored in session.oidc_tx.returnTo
   * and used in the callback handler.
   *
   * If not set, defaults to the value of the `return_to` query parameter.
   *
   * If neither is set, defaults to '/'.
   * @example '/home'
   * @default '/'
   */
  redirectAfterLogin?: string;

  /**
   * Whether to suppress the login prompt.
   * This is stored in session.oidc_tx.silent
   * and used in the callback handler.
   *
   * @example true
   * @default false
   */
  silent?: boolean;

  /**
   * Override authorization parameters.
   *
   * @example { prompt: 'none' }
   * @default undefined
   */
  authorizationParams?: Partial<OIDCAuthorizationRequestParams>;

  /**
   * Forwards specific query parameters from the login request to the authorization request.
   * This allows passing through parameters like 'ui_locales', 'acr_values', or custom parameters
   * that your identity provider supports without having to specify them in authorizationParams.
   *
   * Only parameters with non-empty values will be forwarded.
   *
   * @example ['ui_locales', 'acr_values', 'login_hint']
   * @example ['locale', 'campaign']
   * @default []
   */
  forwardAuthorizationParams?: string[];
};

/**
 * Handle login requests
 */
export const login = (params: LoginParams = {}) => {
  return createMiddleware<OIDCEnv>(async function (c) {
    const configuration = getConfiguration(c);
    const { debug } = configuration;
    const oidcClientConfig = c.var.oidcClient!;
    const session = c.get("session")!;

    // Get the potential return URL
    const potentialReturnTo =
      params.redirectAfterLogin ??
      (c.req.method === "GET" && c.req.path !== configuration.routes.login
        ? c.req.url
        : undefined) ??
      c.req.query("return_to") ??
      "/";

    // Validate the URL to prevent open redirects
    const returnTo = validateRedirectUrl(
      potentialReturnTo,
      configuration.baseURL,
    );

    // Use URL class for safer URL construction
    const redirectURI = new URL(
      configuration.routes.callback,
      configuration.baseURL,
    ).toString();
    const usePKCE = configuration.authorizationParams.response_type === "code";

    let codeVerifier: string | undefined;
    let codeChallenge: string | undefined;
    const nonce = oidc.randomNonce();
    const state = oidc.randomState();
    if (usePKCE) {
      codeVerifier = oidc.randomPKCECodeVerifier();
      codeChallenge = await oidc.calculatePKCECodeChallenge(codeVerifier);
    }

    const paramsFromQuery: Record<string, string> = {};

    const forwardParams =
      params.forwardAuthorizationParams ??
      configuration.forwardAuthorizationParams;

    if (forwardParams && forwardParams.length > 0) {
      for (const param of forwardParams) {
        const value = c.req.query(param);
        if (value) {
          paramsFromQuery[param] = value;
        }
      }
    }

    const authParams: Partial<OIDCAuthorizationRequestParams> = {
      ...configuration.authorizationParams,
      redirect_uri: redirectURI,
      code_challenge: codeChallenge,
      code_challenge_method: codeChallenge ? "S256" : undefined,
      nonce,
      state,
      ...(params.authorizationParams ?? {}),
      ...paramsFromQuery,
    };

    if (params.silent) {
      authParams.prompt = "none";
    }

    debug("Starting login flow with:", authParams);

    session.flash("oidc_tx", {
      codeVerifier: codeVerifier,
      nonce,
      state,
      returnTo,
      silent: params.silent ?? false,
    });

    if (configuration.pushedAuthorizationRequests) {
      const url = await oidc.buildAuthorizationUrlWithPAR(
        oidcClientConfig,
        authParams,
      );
      return c.redirect(url.href);
    }

    const authUrl = oidc.buildAuthorizationUrl(
      oidcClientConfig,
      toSearchParams(authParams),
    );

    return c.redirect(authUrl);
  });
};
