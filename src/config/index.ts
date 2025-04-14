import { Configuration } from 'openid-client';
import { InitConfiguration } from './Configuration';
import { ConfigurationSchema } from './Schema';
const parsedConfig = new Map<InitConfiguration, Configuration>();

export const parseConfiguration = (config: InitConfiguration): Configuration => {
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
