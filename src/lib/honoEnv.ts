import * as oidc from "openid-client";
import { Configuration } from "../config/Configuration";
import { OIDCSession } from "../types/session";
import { OIDCContext } from "./context";

// Extend the Hono context to include OIDC context
export interface OIDCVariables<TSession = object> {
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
  session?: OIDCSession<TSession>;
}

export interface OIDCEnv<TBindings = object, TSession = object> {
  Env: TBindings;
  Variables: OIDCVariables<TSession>;
}
