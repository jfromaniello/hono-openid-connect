import { Configuration } from "@/config/Configuration.js";
import { OIDCSession } from "@/types/session.js";
import * as oidc from "openid-client";
import { OIDCContext } from "./context.js";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface OIDCEnv<TBindings = any, TSession = any> {
  Bindings: TBindings;
  Variables: OIDCVariables<TSession>;
}
