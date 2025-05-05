import { MakeOptional } from "../types/util";
import { InitConfiguration } from "./Configuration";

export type MinimalConfigByEnv = {
  OIDC_ISSUER_URL: string;
  OIDC_CLIENT_ID: string;
  OIDC_CLIENT_SECRET?: string;
  OIDC_AUDIENCE?: string;
  BASE_URL: string;
  OIDC_SESSION_ENCRYPTION_KEY?: string;
};

type PartialConfig = MakeOptional<
  InitConfiguration,
  "clientID" | "clientSecret" | "issuerBaseURL" | "baseURL" | "session"
>;

export type ConditionalInitConfig = NodeJS.ProcessEnv extends MinimalConfigByEnv
  ? PartialConfig
  : InitConfiguration;

export const envHasConfig = (
  config: MinimalConfigByEnv | unknown,
): config is MinimalConfigByEnv => {
  return (
    typeof config === "object" &&
    config !== null &&
    "OIDC_ISSUER_URL" in config &&
    "OIDC_CLIENT_ID" in config &&
    "BASE_URL" in config &&
    typeof config.OIDC_ISSUER_URL === "string" &&
    typeof config.OIDC_CLIENT_ID === "string" &&
    typeof config.BASE_URL === "string"
  );
};

export const assignFromEnv = (
  config: ConditionalInitConfig,
): InitConfiguration => {
  const configWithoutEnv = config ?? ({} as ConditionalInitConfig);

  if (!envHasConfig(process.env)) {
    return configWithoutEnv as InitConfiguration;
  }

  const {
    OIDC_ISSUER_URL,
    OIDC_CLIENT_ID,
    OIDC_CLIENT_SECRET,
    BASE_URL,
    OIDC_AUDIENCE,
  } = process.env;
  return {
    ...configWithoutEnv,
    issuerBaseURL: configWithoutEnv.issuerBaseURL ?? OIDC_ISSUER_URL,
    clientID: configWithoutEnv.clientID ?? OIDC_CLIENT_ID,
    clientSecret: configWithoutEnv.clientSecret ?? OIDC_CLIENT_SECRET,
    baseURL: configWithoutEnv.baseURL ?? BASE_URL,
    authorizationParams: OIDC_AUDIENCE
      ? { audience: OIDC_AUDIENCE }
      : undefined,
    session:
      configWithoutEnv.session === false
        ? false
        : {
            ...(configWithoutEnv.session || {}),
            encryptionKey:
              configWithoutEnv.session?.encryptionKey ??
              process.env.OIDC_SESSION_ENCRYPTION_KEY,
          },
  };
};
