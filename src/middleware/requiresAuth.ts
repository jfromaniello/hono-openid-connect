import { getConfiguration } from "@/config/index.js";
import { Context, Next } from "hono";
import { accepts } from "hono/accepts";
import { HTTPException } from "hono/http-exception";
import { login } from "./login.js";

type OnRequiredAuth = "error" | "login";
/**
 * This middleware checks if the user is authetnicated.
 *
 * If not:
 * - If the request accepts HTML and errorOnRequiredAuth is false
 *   then it redirects to the login page
 * - Otherwise it throws a 401 error
 *
 * @param behavior - The behavior to use when authentication is required.
 * Defaults to `configuration.errorOnRequiredAuth` if not provided.
 */
export function requiresAuth(behavior?: OnRequiredAuth) {
  return async (c: Context, next: Next) => {
    // Check if user is authenticated
    if (!c.var.oidc?.isAuthenticated) {
      const configuration = getConfiguration(c);
      const acceptsHTML =
        accepts(c, {
          header: "Accept",
          supports: ["text/html", "application/json"],
          default: "application/json",
        }) === "text/html";

      const shouldFail =
        !acceptsHTML ||
        behavior === "error" ||
        (!behavior && configuration.errorOnRequiredAuth);

      if (shouldFail) {
        throw new HTTPException(401, {
          message: "Authentication required",
        });
      }

      return login()(c, next);
    }

    // Continue if authenticated
    return next();
  };
}
