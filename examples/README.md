# Hono OpenID Connect Examples

This directory contains examples showcasing how to use the Hono OpenID Connect middleware.

## Basic Example

The `basic.ts` example demonstrates the simplest way to set up authentication for your Hono application using OpenID Connect.

### Prerequisites

Before running the example, make sure you have:

1. An OIDC provider (like Auth0, Okta, or any other OpenID Connect provider)
2. Client ID and Client Secret from your OIDC provider
3. Configured your OIDC provider with the correct callback URL (`http://localhost:3000/callback` for this example)

### Running the Example

You can run the example with the following environment variables:

```bash
# Configure these environment variables
export ISSUER_BASE_URL="https://YOUR_DOMAIN"
export CLIENT_ID="YOUR_CLIENT_ID"
export CLIENT_SECRET="YOUR_CLIENT_SECRET"
export BASE_URL="http://localhost:3000"

# Run the example
npm run example:basic
```

Or you can simply run the example with defaults (you'll need to update the OIDC configuration in the file):

```bash
npm run example:basic
```

### What the Example Does

The basic example:

1. Sets up a Hono application with OpenID Connect authentication
2. Protects all routes by default
3. Provides login, logout, and callback endpoints
4. Shows how to access the authenticated user information

### Key Features Demonstrated

- Basic middleware configuration
- Session management with CookieStore
- Protected routes
- User access
