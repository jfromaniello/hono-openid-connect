import * as oidc from "openid-client";
import QuickLRU from "quick-lru";
import { Configuration } from "../config/Configuration";

// Cache for OIDC clients
const clientCache = new QuickLRU<string, oidc.Configuration>({ maxSize: 10 });

function getClientAuth(config: Configuration): oidc.ClientAuth {
  switch (config.clientAuthMethod) {
    case "client_secret_basic":
      return oidc.ClientSecretBasic(config.clientSecret);
    case "client_secret_post":
      return oidc.ClientSecretPost(config.clientSecret);
    case "client_secret_jwt":
      return oidc.ClientSecretJwt(config.clientSecret);
    case "private_key_jwt":
      return oidc.PrivateKeyJwt(config.clientAssertionSigningKey);
    case "none":
      return oidc.None;
  }
}

/**
 * Initialize the OpenID Connect client
 */
export async function initializeOidcClient(
  config: Configuration,
): Promise<oidc.Configuration> {
  // Generate a cache key for this configuration
  const cacheKey = `${config.issuerBaseURL}:${config.clientID}`;

  // Return cached client if it exists
  if (clientCache.has(cacheKey)) {
    return clientCache.get(cacheKey)!;
  }

  try {
    // Discover the OpenID Connect provider
    const oidcClient = await oidc.discovery(
      new URL(config.issuerBaseURL),
      config.clientID,
      {
        client_secret: config.clientSecret,
      },
      getClientAuth(config),
      {
        [oidc.customFetch]: config.fetch,
        timeout: config.httpTimeout,
      },
    );

    oidcClient[oidc.customFetch] = config.fetch;
    oidcClient.timeout = config.httpTimeout;

    // Cache the client for future use
    clientCache.set(cacheKey, oidcClient);

    return oidcClient;
  } catch (error) {
    console.error("Failed to initialize OIDC client:", error);
    throw new Error(`Could not initialize OIDC client: ${error}`);
  }
}
