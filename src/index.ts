// Export core middleware
export { auth } from "./auth";
export type { OIDCEnv, OIDCVariables } from "./lib/honoEnv";

export {
  attemptSilentLogin,
  callback,
  login,
  logout,
  pauseSilentLogin,
  requiresAuth,
  resumeSilentLogin,
} from "./middleware";
