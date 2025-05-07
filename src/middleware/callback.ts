import { getConfiguration } from "@/config/index.js";
import { Next } from "hono";
import { createMiddleware } from "hono/factory";
import * as oidc from "openid-client";
import { OIDCContext } from "../lib/context.js";
import { OIDCException } from "../lib/Exception.js";
import { OIDCEnv } from "../lib/honoEnv.js";
import { OIDCAuthenticatedSession } from "../types/session.js";
import { resumeSilentLogin } from "./silentLogin.js";

type CallbackParams = {
  /**
   * Optionally override the url to redirect after succesful
   * authentication.
   *
   * Or disable it completely by setting it to false
   * to continue to the next middleware.
   */
  redirectAfterLogin?: string | false;
};

/**
 * Handle callback from the OIDC provider
 */
export const callback = (params: CallbackParams = {}) => {
  return createMiddleware<OIDCEnv>(async function callback(
    c,
    next: Next,
  ): Promise<Response | void> {
    try {
      const configuration = getConfiguration(c);
      const { debug } = configuration;
      const oidcClient = c.var.oidcClient!;
      const session = c.get("session")!;
      const verification = session.get("oidc_tx");

      if (!verification) {
        throw new OIDCException(
          "Invalid callback state",
          "Invalid callback state",
          401,
        );
      }

      debug("Starting OIDC callback handler");

      const requestedAt = Date.now() / 1000;
      const { codeVerifier, nonce, state, returnTo } = verification;

      const tokens = await oidc.authorizationCodeGrant(
        oidcClient,
        c.req.raw,
        {
          pkceCodeVerifier: codeVerifier,
          expectedNonce: nonce,
          expectedState: state,
          idTokenExpected: true,
        },
        configuration.tokenEndpointParams,
      );

      const authSession: OIDCAuthenticatedSession = {
        tokens,
        requestedAt,
        // claims: tokens.claims(),
      };

      session.set("oidc", authSession);
      c.set("oidc", new OIDCContext(c));

      await resumeSilentLogin()(c, next);

      if (params.redirectAfterLogin === false) {
        return next();
      }

      return c.redirect(params.redirectAfterLogin ?? returnTo ?? "/", 307);
    } catch (err) {
      await resumeSilentLogin()(c, next);

      if (err instanceof oidc.ResponseBodyError) {
        throw new OIDCException(
          err.error,
          err.error_description ?? err.error,
          500,
          err,
        );
      }

      throw err;
    }
  });
};
