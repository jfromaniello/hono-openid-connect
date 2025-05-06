export { auth } from "./auth";

export { type UserInfoResponse as UserInfo } from "openid-client";
export type { OIDCEnv, OIDCVariables } from "./lib/honoEnv";
export { type OIDCSession } from "./types/session";

export {
  attemptSilentLogin,
  callback,
  login,
  logout,
  pauseSilentLogin,
  requiresAuth,
  resumeSilentLogin,
} from "./middleware";

export type { TokenEndpointResponse as TokenSet } from "openid-client";

export { OIDCException } from "./lib/Exception";
