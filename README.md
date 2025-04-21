# Hono OpenID Connect Middleware

A lightweight and flexible middleware for the [Hono](https://hono.dev) web framework that simplifies authentication via OpenID Connect (OIDC). This package enables seamless integration with OpenID Connect providers to secure your Hono applications with minimal configuration.

This middleware draws inspiration from [express-openid-connect](https://github.com/auth0/express-openid-connect), though its configuration and session cookie implementation are not compatible.

## Installation

```bash
npm install hono-openid-connect
```

## Basic Usage

The simplest way to secure your Hono application is to implement the middleware at the application level. By default, all routes will require authentication.

```ts
// .env
// ISSUER_BASE_URL=https://YOUR_DOMAIN
// CLIENT_ID=YOUR_CLIENT_ID
// BASE_URL=https://YOUR_APPLICATION_ROOT_URL
// SECRET=LONG_RANDOM_STRING

import { Hono } from "hono";
import { auth } from "hono-openid-connect";

const app = new Hono();

// Configure auth middleware with session options
app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    baseURL: process.env.BASE_URL,
    session: {
      encryptionKey: "password_at_least_32_characters_long",
    },
  }),
);

app.get("/", (c) => {
  return c.text(`Hello ${c.var.oidc?.claims?.name}!`);
});

export default app;
```

## Features

- **OpenID Connect Authentication Flow**: Implements the standard OIDC authorization code flow
- **Session Management**: Built-in session support with configurable cookie settings
- **Configurable Routes**: Customize login, callback, and logout route paths
- **Selective Protection**: Choose which routes require authentication with the `authRequired` option
- **Token Management**: Handles access tokens, ID tokens and refresh tokens
- **User Information**: Automatically fetches and provides user profile data from the UserInfo endpoint
- **Claim-Based Authorization**: Middleware for authorizing based on claims from tokens
- **PKCE Support**: Implements Proof Key for Code Exchange for enhanced security
- **Environment Flexibility**: Works across various environments including Node.js, Bun, Cloudflare Workers, and more

## Configuration Options

### Required Configuration

| Option          | Type     | Description                                                      |
| --------------- | -------- | ---------------------------------------------------------------- |
| `issuerBaseURL` | `string` | Base URL of the OIDC provider (e.g., `https://auth.example.com`) |
| `baseURL`       | `string` | Base URL of your application (e.g., `https://myapp.com`)         |
| `clientID`      | `string` | Client ID provided by your OIDC provider                         |

### Optional Configuration

| Option                        | Type            | Default     | Description                                                                          |
| ----------------------------- | --------------- | ----------- | ------------------------------------------------------------------------------------ |
| `clientSecret`                | `string`        | `undefined` | Client Secret provided by your OIDC provider (required for most flows)               |
| `authRequired`                | `boolean`       | `true`      | Whether authentication is required for all routes                                    |
| `idpLogout`                   | `boolean`       | `false`     | Whether to perform logout at the identity provider when logging out                  |
| `pushedAuthorizationRequests` | `boolean`       | `false`     | Enable Pushed Authorization Requests (PAR)                                           |
| `customRoutes`                | `Array<string>` | `[]`        | Specify which built-in routes to skip (options: `'login'`, `'callback'`, `'logout'`) |

### Routes Configuration

You can customize the paths for login, callback, and logout endpoints:

```ts
app.use(
  auth({
    // ...required options
    routes: {
      login: "/custom-login",
      callback: "/auth-callback",
      logout: "/sign-out",
    },
  }),
);
```

### Session Configuration

The middleware uses [hono-sessions](https://www.npmjs.com/package/hono-sessions) for session management. You can configure session options or disable sessions entirely:

```ts
app.use(
  auth({
    // ...required options
    session: {
      encryptionKey: "your-secure-encryption-key-minimum-32-chars",
      sessionCookieName: "my_session",
      cookieOptions: {
        sameSite: "Lax",
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      },
    },
  }),
);
```

To use your own instance of [hono-sessions](https://www.npmjs.com/package/hono-sessions):

```ts
app.use(sessionMiddleware({}));
app.use(
  auth({
    // ...required options
    session: false,
  }),
);
```

### Authorization Parameters

You can customize the parameters sent to the authorization endpoint:

```ts
app.use(
  auth({
    // ...required options
    authorizationParams: {
      response_type: "code",
      scope: "openid profile email",
      response_mode: "query",
    },
  }),
);
```

## Advanced Usage

### Selective Route Protection

Only protect specific routes:

```ts
import { Hono } from "hono";
import { auth, requiresAuth } from "hono-openid-connect";

const app = new Hono();

app.use(
  auth({
    // ...required options
    authRequired: false,
  }),
);

// Public route - no authentication required
app.get("/", (c) => {
  return c.text("This is a public page");
});

// Protected route - authentication required
app.use("/profile/*", requiresAuth());
app.get("/profile", (c) => {
  const user = c.var.oidc.user;
  return c.text(`Hello ${user.name || user.sub}!`);
});
```

### Silent Login Attempt

Try to authenticate silently without user interaction:

```ts
import { Hono } from "hono";
import { auth, attemptSilentLogin } from "hono-openid-connect";

const app = new Hono();

app.use(
  auth({
    /* ...options */
    authRequired: false,
  }),
);

app.get("/", attemptSilentLogin(), async (c) => {
  if (c.var.oidc?.isAuthenticated) {
    return c.text(`Hello ${c.var.oidc.user.name}!`);
  }

  return c.text("You are not logged in");
});
```

## Current Limitations

- **Backchannel Logout**: Unlike express-openid-connect, this middleware does not currently support backchannel logout.
- **JWT Response Mode**: Currently supports standard response modes but not JWT response mode.
- **Dynamic Client Registration**: Manual client registration is required.

## Context Variables

The middleware adds the following to the Hono context (`c.var`):

- `c.var.oidc.isAuthenticated`: Boolean indicating if the user is authenticated
- `c.var.oidc.claims`: All claims from the ID token
- `c.var.oidc.tokens`: The entire token exchange response:
  - `c.var.oidc.tokens.id_token`: Raw ID token
  - `c.var.oidc.tokens.access_token`: Access token (if available)
  - `c.var.oidc.tokens.refresh_token`: Refresh token (if available)
- `c.var.oidc.isExpired`: Boolean indicating if the access token is expired
- `c.var.oidc.fetchUserInfo()`: Fetches user info from the UserInfo endpoint.
- `c.var.oidc.refresh()`: Refreshes the access token using the refresh token (if available).
- `c.var.oidcClient`: The openid-client authorization server configuration object. This is helpful if you need to invoke a method of the openid-client directly.

## License

MIT 2025 - José F. Romaniello
