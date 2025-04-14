import { describe, expect, it } from 'vitest';
import { parseConfiguration } from '../src/config';
import { InitConfiguration } from '../src/config/Configuration';

describe('Configuration Parser', () => {
  it('should parse a valid configuration', () => {
    const validConfig: InitConfiguration = {
      issuerBaseURL: 'https://auth.example.com',
      baseURL: 'https://app.example.com',
      clientID: 'test-client-id',
    };

    const parsedConfig = parseConfiguration(validConfig);

    expect(parsedConfig).toHaveProperty('issuerBaseURL', 'https://auth.example.com');
    expect(parsedConfig).toHaveProperty('baseURL', 'https://app.example.com');
    expect(parsedConfig).toHaveProperty('clientID', 'test-client-id');
    expect(parsedConfig).toHaveProperty('authRequired', true); // default value
    expect(parsedConfig).toHaveProperty('auth0Logout', false); // default value
    expect(parsedConfig).toHaveProperty('fetch', globalThis.fetch); // default value
    expect(parsedConfig).toMatchSnapshot();
  });

  it('should throw an error for invalid configuration', () => {
    const invalidConfig = {
      // Missing required issuerBaseURL
      baseURL: 'https://app.example.com',
      clientID: 'test-client-id',
    };

    expect(() => parseConfiguration(invalidConfig as any)).toThrow();
  });

  it('should apply default values to configuration', () => {
    const minimalConfig: InitConfiguration = {
      issuerBaseURL: 'https://auth.example.com',
      baseURL: 'https://app.example.com',
      clientID: 'test-client-id',
    };

    const parsedConfig = parseConfiguration(minimalConfig);

    expect(parsedConfig).toHaveProperty('authRequired', true);
    expect(parsedConfig).toHaveProperty('clockTolerance', 60);
    expect(parsedConfig).toHaveProperty('routes');

    // Type assertion to access routes property
    const config = parsedConfig as unknown as {
      routes: {
        login: string | false;
        logout: string | false;
        callback: string | false;
        postLogoutRedirect: string | false;
        backchannelLogout: string | false;
      };
    };

    expect(config.routes).toEqual({
      login: '/login',
      logout: '/logout',
      callback: '/callback',
      postLogoutRedirect: '/',
      backchannelLogout: '/backchannel-logout',
    });
  });

  it('should validate backchannelLogout configuration', () => {
    const configWithBackchannelLogout: InitConfiguration = {
      issuerBaseURL: 'https://auth.example.com',
      baseURL: 'https://app.example.com',
      clientID: 'test-client-id',
      backchannelLogout: {
        isLoggedOut: async () => true,
        onLogoutToken: async (token: string) => {
          /* implementation */
        },
      },
    };

    const parsedConfig = parseConfiguration(configWithBackchannelLogout);

    // Type assertion for backchannelLogout property
    const config = parsedConfig as unknown as {
      backchannelLogout: {
        isLoggedOut: boolean | (() => Promise<boolean>);
        onLogoutToken: (token: string) => Promise<void>;
      };
    };

    expect(config.backchannelLogout).toHaveProperty('isLoggedOut');
    expect(config.backchannelLogout).toHaveProperty('onLogoutToken');
  });

  it('should cache parsed configurations', () => {
    const config: InitConfiguration = {
      issuerBaseURL: 'https://auth.example.com',
      baseURL: 'https://app.example.com',
      clientID: 'test-client-id',
    };

    const firstParsed = parseConfiguration(config);
    const secondParsed = parseConfiguration(config);

    expect(firstParsed).toBe(secondParsed); // Should be the same object instance (cached)
  });
});
