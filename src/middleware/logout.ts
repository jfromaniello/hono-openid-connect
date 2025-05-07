import { getConfiguration } from "@/config/index.js";
import { OIDCEnv } from "@/lib/honoEnv.js";
import { createMiddleware } from "hono/factory";
import * as oidc from "openid-client";
import { resumeSilentLogin } from "./silentLogin.js";

type LogoutParams = {
  redirectAfterLogout?: string;
};

/**
 * Handle logout requests
 */
export const logout = (params: LogoutParams = {}) => {
  return createMiddleware<OIDCEnv>(async function (c, next): Promise<Response> {
    const config = getConfiguration(c);
    const oidcClient = c.var.oidcClient!;
    const session = c.get("session");
    const oidcSession = session?.get("oidc");

    // Clear the session
    if (session && oidcSession) {
      session.forget("oidc");
    }

    await resumeSilentLogin()(c, next);

    const postLogoutRedirectUri = params.redirectAfterLogout ?? "/";

    // Handle IdP logout if enabled
    if (config.idpLogout && oidcSession?.tokens.id_token) {
      const postLogoutRedirectURI = new URL(
        postLogoutRedirectUri,
        config.baseURL,
      ).toString();
      const endSessionUrl = oidc.buildEndSessionUrl(oidcClient, {
        id_token_hint: oidcSession.tokens.id_token,
        post_logout_redirect_uri: postLogoutRedirectURI,
      });
      return c.redirect(endSessionUrl);
    }

    // If not doing IdP logout, just redirect to the specified URL
    return c.redirect(postLogoutRedirectUri);
  });
};
