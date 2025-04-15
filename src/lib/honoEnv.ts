import * as oidc from "openid-client";
import { Configuration } from "../config/Configuration";
import { OIDCSession } from "../types/session";
import { OIDCContext } from "./context";

// Extend the Hono context to include OIDC context
export interface OIDCVariables {
  /**
   * The information about the OIDC session.
   */
  oidc?: OIDCContext;

  /**
   * The middleware configuration parsed and with its default values.
   */
  oidcConfiguration?: Configuration;

  /**
   * The OIDC client configuration for the openid-client
   */
  oidcClient?: oidc.Configuration;

  /**
   * The session for the OIDC middleware.
   */
  session?: OIDCSession;
}

export interface OIDCEnv {
  Variables: OIDCVariables;
}
