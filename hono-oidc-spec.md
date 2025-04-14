# Hono OpenID Connect Middleware

A middleware for the Hono web framework to handle authentication via OpenID Connect.

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

import { Hono } from 'hono'
import { auth } from 'hono-openid-connect'

const app = new Hono()

// Configure auth middleware with session options
app.use(auth({
  session: {
    encryptionKey: 'password_at_least_32_characters_long', 
    expireAfterSeconds: 900, // Expire session after 15 minutes of inactivity
    cookieOptions: {
      sameSite: 'Lax',
      path: '/',
      httpOnly: true,
    },
  }
}))

app.get('/', (c) => {
  return c.text(`hello ${c.var.oidc.user.sub}`)
})

export default app
```

## Configuration

The middleware can be configured with the following options:

```ts
type OidcConfig = {
  // Required options
  issuerBaseURL?: string // URL of the OpenID Connect provider
  baseURL?: string // URL of the application
  clientID?: string // Client ID for the OpenID Connect provider
  clientSecret?: string // Client secret (required when using code flow)
  
  // Auth behavior options
  authRequired?: boolean // Whether all routes require authentication (default: true)
  auth0Logout?: boolean // Whether to use Auth0-specific logout (default: false)
  idpLogout?: boolean // Whether to logout from the IdP as well (default: false)
  
  // Session options
  session?: boolean | SessionOptions // Use existing session or configure a new one (default: true)
  
  // Routes options
  routes?: {
    login?: string | false // Route for login (default: '/login')
    logout?: string | false // Route for logout (default: '/logout')
    callback?: string | false // Route for callback (default: '/callback')
    postLogoutRedirect?: string // Route for redirecting after logout (default: baseURL)
  }
  
  // Authorization options
  authorizationParams?: {
    response_type?: string // (default: 'id_token')
    response_mode?: string // (default: 'form_post')
    scope?: string // (default: 'openid profile email')
    audience?: string
    redirect_uri?: string
  }
  
  // Advanced options
  backchannelLogout?: boolean | {
    isLoggedOut?: (sid: string, sub: string) => Promise<boolean>
    onLogoutToken?: (token: LogoutToken) => Promise<void>
    onLogin?: (session: OidcSession) => Promise<void>
  }
  clockTolerance?: number // Clock tolerance in seconds for token validation (default: 60)
  httpTimeout?: number // Timeout for HTTP requests in milliseconds (default: 5000)
  
  // Hooks
  afterCallback?: (c: Context, session: OidcSession) => Promise<OidcSession> | OidcSession
  getLoginState?: (c: Context) => Promise<Record<string, any>> | Record<string, any>
}
```

## Middleware

### Core Middleware 

```ts
import { auth, requiresAuth, claimEquals, login, logout, callback, fetchUserInfo } from 'hono-openid-connect'

// Initialize auth middleware with configuration
app.use(auth({
  authRequired: false
}))

// Anyone can access the homepage
app.get('/', (c) => {
  return c.html('<a href="/admin">Admin Section</a>')
})

// requiresAuth checks authentication
app.get('/admin', requiresAuth(), (c) => {
  return c.text(`Hello ${c.var.oidc.user.sub}, this is the admin section.`)
})

// claimEquals checks if a claim equals the given value
app.get('/admin-section', claimEquals('isAdmin', true), (c) => {
  return c.text(`Hello ${c.var.oidc.user.sub}, this is the admin section.`)
})

// Custom login route
app.get('/custom-login', (c) => {
  return login(c, {
    returnTo: '/profile',
    authorizationParams: {
      redirect_uri: 'http://localhost:3000/callback',
    },
  })
})

// Custom callback route
app.get('/custom-callback', (c) => {
  return callback(c, {
    redirectUri: 'http://localhost:3000/callback',
  })
})

// Fetch user info from the userinfo endpoint
app.get('/profile', requiresAuth(), async (c) => {
  const userInfo = await fetchUserInfo(c)
  return c.json(userInfo)
})
```

## Context Extensions

The `auth()` middleware adds the following to the `c.var` context:

```ts
interface OidcContext {
  isAuthenticated: boolean
  user: UserProfile // The user profile from the ID token
  idToken: string // The ID token
  accessToken?: {
    token: string
    token_type: string
    expires_at: number
    isExpired: () => boolean
  }
  refreshToken?: string
}

interface OidcConfig {
  // Internal configuration that other functions can use
  // Not meant to be accessed directly by users
}

// Example type definition for Hono
type AppVariables = {
  oidc: OidcContext
  oidcConfig: OidcConfig
}

type AppEnv = {
  Variables: AppVariables
}

const app = new Hono<AppEnv>()

// Usage in a route handler
app.get('/profile', requiresAuth(), (c) => {
  const { user } = c.var.oidc
  return c.json({ name: user.name, email: user.email })
})
```

## Helper Functions

The library exports the following helper functions:

```ts
// Initiate login process
function login(
  c: Context, 
  options?: {
    returnTo?: string
    authorizationParams?: Record<string, any>
  }
): Response

// Handle OIDC callback
function callback(
  c: Context, 
  options?: {
    redirectUri?: string
  }
): Promise<Response>

// Log out user
function logout(
  c: Context, 
  options?: {
    returnTo?: string
  }
): Response

// Fetch user info from the OIDC provider
function fetchUserInfo(c: Context): Promise<Record<string, any>>

// Refresh the access token
function refreshToken(c: Context): Promise<AccessToken>
```

## Custom Routes and Handlers

You can customize the default routes:

```ts
const app = new Hono()

app.use('*', sessionMiddleware({
  store: new CookieStore(),
  encryptionKey: 'password_at_least_32_characters_long',
}))

app.use(auth({
  routes: {
    login: false, // Disable default login route
    callback: false, // Disable default callback route
    postLogoutRedirect: '/custom-logout',
  }
}))

// Custom login route
app.get('/login', (c) => {
  return login(c, {
    returnTo: '/profile',
    authorizationParams: {
      redirect_uri: 'http://localhost:3000/callback',
    },
  })
})

// Custom callback route
app.get('/callback', (c) => {
  return callback(c, {
    redirectUri: 'http://localhost:3000/callback',
  })
})

app.post('/callback', async (c) => {
  const body = await c.req.parseBody()
  // Handle form post 
  return callback(c, {
    redirectUri: 'http://localhost:3000/callback',
  })
})

// Custom logout page
app.get('/custom-logout', (c) => {
  return c.text('Bye!')
})
```

## Access Tokens for External APIs

If your application needs an access token for external APIs:

```ts
app.use(auth({
  authorizationParams: {
    response_type: 'code', // This requires you to provide a client secret
    audience: 'https://api.example.com/products',
    scope: 'openid profile email read:products',
  }
}))

app.get('/', async (c) => {
  const { token_type, token: access_token } = c.var.oidc.accessToken
  
  // Check if token is expired and refresh if needed
  if (c.var.oidc.accessToken.isExpired()) {
    const newToken = await refreshToken(c)
    // Updated token is now in c.var.oidc.accessToken
  }
  
  // Call external API
  const productsResp = await fetch('https://api.example.com/products', {
    headers: {
      'Authorization': `${c.var.oidc.accessToken.token_type} ${c.var.oidc.accessToken.token}`
    }
  })
  
  const products = await productsResp.json()
  return c.json({ products })
})
```

## Refresh Tokens

```ts
app.use(auth({
  authorizationParams: {
    response_type: 'code',
    audience: 'https://api.example.com/products',
    scope: 'openid profile email offline_access read:products',
  }
}))

// Refresh logic is handled by refreshToken function
app.get('/refresh', requiresAuth(), async (c) => {
  try {
    const newToken = await refreshToken(c)
    return c.json({ message: 'Token refreshed successfully' })
  } catch (error) {
    return c.json({ error: 'Failed to refresh token' }, 400)
  }
})
```

## Validate Claims

```ts
app.use(auth({
  afterCallback: (c, session) => {
    // You can use a JWT library to decode the token
    // import { decode } from 'jose' or another JWT library
    const claims = decodeJwt(session.id_token)
    
    if (claims.org_id !== 'Required Organization') {
      throw new Error('User is not part of the Required Organization')
    }
    
    return session
  }
}))
```

## Back-Channel Logout

```ts
import { auth } from 'hono-openid-connect'

const app = new Hono()

// Configure session with hono-sessions
app.use('*', sessionMiddleware({
  store: new RedisStore(redisClient),
  encryptionKey: 'password_at_least_32_characters_long',
}))

app.use(auth({
  idpLogout: true,
  backchannelLogout: true,
}))

// This will create a /backchannel-logout endpoint automatically
```

## Error Handling

The middleware will throw exceptions for authentication-related errors. You can handle them with Hono's error handling:

```ts
import { HTTPException } from 'hono/http-exception'

app.onError((err, c) => {
  if (err.message.includes('login required')) {
    return c.redirect('/login')
  }
  
  // Log the error
  console.error(err)
  
  // Return a friendly error response
  return c.text('An error occurred during authentication', 500)
})
```

## TypeScript Support

The middleware is fully typed for TypeScript:

```ts
import { Hono } from 'hono'
import { auth, OidcContext } from 'hono-openid-connect'
import { sessionMiddleware, CookieStore, Session } from 'hono-sessions'

type SessionData = {
  counter: number
}

type AppVariables = {
  session: Session<SessionData>
  oidc: OidcContext
  oidcConfig: any // Internal use
}

type AppBindings = {
  AUTH_SECRET: string
}

type AppEnv = {
  Variables: AppVariables
  Bindings: AppBindings
}

const app = new Hono<AppEnv>()

// Set up sessions
app.use('*', sessionMiddleware({
  store: new CookieStore(),
  encryptionKey: 'password_at_least_32_characters_long',
}))

// Set up auth
app.use(auth({
  clientSecret: (c) => c.env.AUTH_SECRET
}))

app.get('/profile', requiresAuth(), (c) => {
  // TypeScript knows about c.var.oidc and c.var.session
  const { user } = c.var.oidc
  
  // Use the session
  c.var.session.set('counter', (c.var.session.get('counter') || 0) + 1)
  
  return c.json({ 
    name: user.name,
    visits: c.var.session.get('counter')
  })
})
```

## Environment Variables

The middleware supports configuration via environment variables, matching the Express middleware:

```
ISSUER_BASE_URL=https://YOUR_DOMAIN
CLIENT_ID=YOUR_CLIENT_ID
BASE_URL=https://YOUR_APPLICATION_ROOT_URL
SECRET=LONG_RANDOM_VALUE
```

These values can be loaded from environment variables or passed directly in the configuration object.
