import { OIDCEnv } from "@/lib/honoEnv.js";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { Configuration, InitConfiguration } from "./Configuration.js";
import { ConfigurationSchema } from "./Schema.js";

const parsedConfig = new Map<InitConfiguration, Configuration>();

export const parseConfiguration = (
  config: InitConfiguration,
): Configuration => {
  if (parsedConfig.has(config)) {
    return parsedConfig.get(config)!;
  }
  const result = ConfigurationSchema.parse(config) as Configuration;
  parsedConfig.set(config, result);
  return result;
};

export const getConfiguration = (c: Context<OIDCEnv>): Configuration => {
  if (!c.var.oidcConfiguration) {
    throw new HTTPException(500, {
      message:
        "The oidc middleware is not properly configured. Install `auth` first.",
    });
  }
  return c.var.oidcConfiguration;
};

export {
  assignFromEnv,
  type ConditionalInitConfig,
} from "@/config/envConfig.js";
