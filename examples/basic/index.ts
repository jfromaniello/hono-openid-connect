import { serve } from "@hono/node-server";
import { Context, Hono } from "hono";
import { auth, OIDCEnv } from "../../src"; // Import from our local package

// Create the Hono app
const app = new Hono();

// Configure auth middleware
const authMiddleware = auth({
  issuerBaseURL: process.env.ISSUER_BASE_URL || "https://YOUR_DOMAIN",
  clientID: process.env.CLIENT_ID || "YOUR_CLIENT_ID",
  clientSecret: process.env.CLIENT_SECRET || "YOUR_CLIENT_SECRET",
  baseURL: process.env.BASE_URL || "http://localhost:3000",
  session: {
    encryptionKey: process.env.OIDC_AUTH_SECRET,
  },
});

app.use(authMiddleware);

// Add a simple protected route
app.get("/", (c: Context<OIDCEnv>) => {
  // Access the authenticated user from context
  const user = c.var.oidc?.claims;
  return c.text(`Hello ${user?.name || "User"}!
    You are authenticated.`);
});

// Add an unprotected route
app.get("/public", (c) => {
  return c.text("Public route - no authentication required");
});

// Start the server
console.log("Server starting at http://localhost:3000");

serve({
  fetch: app.fetch,
  port: 3000,
});
