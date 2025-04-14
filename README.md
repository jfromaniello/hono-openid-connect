# Hono OpenID Connect Middleware

A middleware for the [Hono](https://hono.dev) web framework to handle authentication via OpenID Connect.

## Installation

```bash
npm install hono-openid-connect
```

## Basic Usage

The simplest use case for this middleware. By default all routes are protected.

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
    session: {
      encryptionKey: "password_at_least_32_characters_long",
      expireAfterSeconds: 900, // Expire session after 15 minutes of inactivity
      cookieOptions: {
        sameSite: "Lax",
        path: "/",
        httpOnly: true,
      },
    },
  })
);

app.get("/", (c) => {
  return c.text(`hello ${c.var.oidc.user.sub}`);
});

export default app;
```

## Features

- OpenID Connect authentication flow
- Session management
- Configurable login, logout, and callback routes
- Access token and refresh token support
- User information retrieval
- Configurable authentication requirements
- Claim-based authorization

## Documentation

For more details on configuration and advanced usage, please refer to the [documentation](https://github.com/yourusername/hono-openid-connect).

## License

MIT
