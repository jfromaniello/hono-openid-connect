import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { OIDCEnv } from "../lib/honoEnv";
import { Configuration, InitConfiguration } from "./Configuration";
import { ConfigurationSchema } from "./Schema";
const parsedConfig = new Map<InitConfiguration, Configuration>();

export const parseConfiguration = (
  config: InitConfiguration,
): Configuration => {
  if (parsedConfig.has(config)) {
    return parsedConfig.get(config)!;
  }
  const result = ConfigurationSchema.validate(config);
  if (result.error) {
    throw result.error;
  }
  parsedConfig.set(config, result.value);
  return result.value;
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
