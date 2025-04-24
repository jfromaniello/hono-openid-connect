import { createMiddleware } from "hono/factory";
import * as oidc from "openid-client";
import { getConfiguration } from "../config";
import { OIDCAuthorizationRequestParams } from "../config/authRequest";
import { OIDCEnv } from "../lib/honoEnv";
import { toSearchParams } from "../utils/util";

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
    const returnTo =
      params.redirectAfterLogin ??
      (c.req.method === "GET" && c.req.path !== configuration.routes.login
        ? c.req.url
        : undefined) ??
      "/";

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

    const authParams: Partial<OIDCAuthorizationRequestParams> = {
      ...configuration.authorizationParams,
      redirect_uri: redirectURI,
      code_challenge: codeChallenge,
      code_challenge_method: codeChallenge ? "S256" : undefined,
      nonce,
      state,
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
