import { MiddlewareHandler, Next } from "hono";
import { sessionMiddleware } from "hono-sessions";
import { every } from "hono/combine";
import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import { parseConfiguration } from "./config";
import { InitConfiguration } from "./config/Configuration";
import { initializeOidcClient } from "./lib/client";
import { OIDCContext } from "./lib/context";
import { OIDCEnv } from "./lib/honoEnv";
import {
  callback as callbackHandler,
  login as loginHandler,
  logout as logoutHandler,
} from "./middleware";

/**
 * Main auth middleware function
 */
export function auth(initConfig: InitConfiguration): MiddlewareHandler {
  const config = parseConfiguration(initConfig);

  // Initialize session middleware if needed
  const sessionMiddlewareHandler =
    config.session !== false ? sessionMiddleware(config.session) : null;

  // Main OIDC middleware function
  const oidcMiddleware: MiddlewareHandler = createMiddleware<OIDCEnv>(
    async (c, next: Next): Promise<Response | void> => {
      try {
        c.set("oidcConfiguration", config);

        // Initialize the OIDC client with defaults
        const clientConfig = await initializeOidcClient(config);
        c.set("oidcClient", clientConfig);

        // Check if there's a valid session
        const session = c.get("session");
        if (!session) {
          throw new HTTPException(500, {
            message: "Session middleware not configured properly",
          });
        }

        const oidcContext = new OIDCContext(c);
        c.set("oidc", oidcContext);

        // Use destructuring with defaults to ensure routes is always defined
        const { routes, authRequired } = config;
        const { login, callback, logout } = routes;

        // Handle login route
        if (!config.customRoutes.includes("login") && c.req.path === login) {
          return loginHandler()(c, next);
        }

        // Handle callback route
        if (
          !config.customRoutes.includes("callback") &&
          c.req.path === callback
        ) {
          return callbackHandler()(c, next);
        }

        // Handle logout route
        if (!config.customRoutes.includes("logout") && c.req.path === logout) {
          return logoutHandler()(c, next);
        }

        // Handle unauthenticated requests
        if (authRequired && !c.var.oidc?.isAuthenticated) {
          return loginHandler()(c, next);
        }
      } catch (error) {
        console.error("OIDC Middleware Error:", error);
        return c.text("Internal Server Error", 500);
      }

      // Continue to the next middleware or route handler
      return await next();
    },
  );

  // Return array of middlewares or just the OIDC middleware
  if (sessionMiddlewareHandler) {
    return every(sessionMiddlewareHandler, oidcMiddleware);
  }
  return oidcMiddleware;
}
