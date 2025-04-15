import { Context, Next } from "hono";
import { accepts } from "hono/accepts";
import { HTTPException } from "hono/http-exception";
import { getConfiguration } from "../config";
import { login } from "./login";

/**
 * This middleware checks if the user is authetnicated.
 *
 * If not:
 * - If the request accepts HTML and errorOnRequiredAuth is false
 *   then it redirects to the login page
 * - Otherwise it throws a 401 error
 */
export function requiresAuth() {
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

      if (configuration.errorOnRequiredAuth && !acceptsHTML) {
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
