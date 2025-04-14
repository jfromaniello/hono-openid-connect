import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { auth } from '../src'; // Import from our local package
import { CookieStore } from 'hono-sessions';

// Create the Hono app
const app = new Hono();

// Configure auth middleware
const authMiddleware = auth({
  issuerBaseURL: process.env.ISSUER_BASE_URL || 'https://YOUR_DOMAIN',
  clientID: process.env.CLIENT_ID || 'YOUR_CLIENT_ID',
  clientSecret: process.env.CLIENT_SECRET || 'YOUR_CLIENT_SECRET',
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  session: {
    store: new CookieStore(),
    encryptionKey: process.env.OIDC_AUTH_SECRET,
    expireAfterSeconds: 900, // Expire session after 15 minutes of inactivity
    cookieOptions: {
      sameSite: 'Lax',
      path: '/',
      httpOnly: true,
    },
  },
  authRequired: true,
});

app.use(authMiddleware);

// Add a simple protected route
app.get('/', c => {
  // Access the authenticated user from context
  const user = c.var.oidc.user;
  return c.text(`Hello ${user.sub || 'User'}! You are authenticated.`);
});

// Add an unprotected route
app.get('/public', c => {
  return c.text('Public route - no authentication required');
}); // Set auth: false to make this route public

// Start the server
console.log('Server starting at http://localhost:3000');

serve({
  fetch: app.fetch,
  port: 3000,
});
