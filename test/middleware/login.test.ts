/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from "hono";
import * as oidc from "openid-client";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { getConfiguration } from "../../src/config";
import { login } from "../../src/middleware/login";
import { toSearchParams } from "../../src/utils/util";

// Mock dependencies
vi.mock("openid-client", () => ({
  randomNonce: vi.fn(),
  randomState: vi.fn(),
  randomPKCECodeVerifier: vi.fn(),
  calculatePKCECodeChallenge: vi.fn(),
  buildAuthorizationUrl: vi.fn(),
}));

vi.mock("../../src/config", () => ({
  getConfiguration: vi.fn(),
}));

vi.mock("../../src/utils/debug", () => ({
  default: vi.fn().mockReturnValue(vi.fn()),
}));

vi.mock("../../src/utils/util", async (original) => {
  const actual: object = await original();
  return {
    ...actual,
    toSearchParams: vi
      .fn()
      .mockImplementation((params) => new URLSearchParams(params)),
  };
});

describe("login middleware", () => {
  let mockContext: Context;
  let mockSession: any;
  let mockConfiguration: any;
  const nextFn = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();

    // Mock generated values
    (oidc.randomNonce as Mock).mockReturnValue("mock-nonce");
    (oidc.randomState as Mock).mockReturnValue("mock-state");
    (oidc.randomPKCECodeVerifier as Mock).mockReturnValue("mock-code-verifier");
    (oidc.calculatePKCECodeChallenge as Mock).mockResolvedValue(
      "mock-code-challenge",
    );
    (oidc.buildAuthorizationUrl as Mock).mockReturnValue(
      "https://idp.example.com/auth",
    );

    // Mock session data
    mockSession = {
      get: vi.fn(),
      set: vi.fn(),
      flash: vi.fn(),
    };

    // Create a mock Hono context
    mockContext = {
      var: {
        oidcClient: {
          /* mock OIDC client */
        },
      },
      get: vi.fn().mockImplementation((key) => {
        if (key === "session") return mockSession;
        return undefined;
      }),
      req: {
        url: "https://app.example.com/login",
        method: "GET",
        query: vi.fn().mockReturnValue(null),
      },
      redirect: vi.fn().mockImplementation((url) => {
        return { status: 302, headers: { location: url } };
      }),
    } as unknown as Context;

    // Create mock configuration
    mockConfiguration = {
      debug: vi.fn(),
      baseURL: "https://app.example.com",
      routes: {
        callback: "/callback",
      },
      authorizationParams: {
        response_type: "code",
        scope: "openid profile email",
      },
    };

    // Setup the getConfiguration mock
    (getConfiguration as Mock).mockReturnValue(mockConfiguration);
  });

  describe("when using PKCE flow", () => {
    let result: Response;

    beforeEach(async () => {
      mockConfiguration.authorizationParams.response_type = "code";
      result = (await login()(mockContext, nextFn)) as Response;
    });

    it("should get the configuration", () => {
      expect(getConfiguration).toHaveBeenCalledWith(mockContext);
    });

    it("should generate a random nonce", () => {
      expect(oidc.randomNonce).toHaveBeenCalled();
    });

    it("should generate a random state", () => {
      expect(oidc.randomState).toHaveBeenCalled();
    });

    it("should generate a PKCE code verifier", () => {
      expect(oidc.randomPKCECodeVerifier).toHaveBeenCalled();
    });

    it("should calculate a PKCE code challenge", () => {
      expect(oidc.calculatePKCECodeChallenge).toHaveBeenCalledWith(
        "mock-code-verifier",
      );
    });

    it("should store the verification data in the session", () => {
      expect(mockSession.flash).toHaveBeenCalled();
      expect(mockSession.flash).toHaveBeenCalledWith("oidc_tx", {
        codeVerifier: "mock-code-verifier",
        nonce: "mock-nonce",
        state: "mock-state",
        returnTo: "/",
        silent: false,
      });
    });

    it("should build the authorization URL with correct parameters", () => {
      expect(toSearchParams).toHaveBeenCalledWith({
        ...mockConfiguration.authorizationParams,
        redirect_uri: "https://app.example.com/callback",
        code_challenge: "mock-code-challenge",
        code_challenge_method: "S256",
        nonce: "mock-nonce",
        state: "mock-state",
      });
      expect(
        (oidc.buildAuthorizationUrl as Mock).call[0],
      ).toMatchInlineSnapshot(`undefined`);
    });

    it("should redirect to the authorization URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/auth",
      );
    });

    it("should return a 302 response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/auth" },
      });
    });
  });

  describe("when not using PKCE flow", () => {
    let result: Response;

    beforeEach(async () => {
      mockConfiguration.authorizationParams.response_type = "id_token";
      result = (await login()(mockContext, nextFn)) as Response;
    });

    it("should not generate a PKCE code verifier", () => {
      expect(oidc.randomPKCECodeVerifier).not.toHaveBeenCalled();
    });

    it("should not calculate a PKCE code challenge", () => {
      expect(oidc.calculatePKCECodeChallenge).not.toHaveBeenCalled();
    });

    it("should build the authorization URL without PKCE parameters", () => {
      expect(toSearchParams).toHaveBeenCalledWith({
        ...mockConfiguration.authorizationParams,
        redirect_uri: "https://app.example.com/callback",
        code_challenge: undefined,
        code_challenge_method: undefined,
        nonce: "mock-nonce",
        state: "mock-state",
      });
    });

    it("should redirect to the authorization URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/auth",
      );
    });

    it("should return a 302 response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/auth" },
      });
    });
  });

  describe("when redirectAfterLogin is specified", () => {
    let result: Response;

    beforeEach(async () => {
      result = (await login({
        redirectAfterLogin: "/dashboard",
      })(mockContext, nextFn)) as Response;
    });

    it("should use the specified redirectAfterLogin as the returnTo value", () => {
      expect(mockSession.flash).toHaveBeenCalledWith("oidc_tx", {
        codeVerifier: "mock-code-verifier",
        nonce: "mock-nonce",
        state: "mock-state",
        returnTo: "/dashboard",
        silent: false,
      });
    });

    it("should redirect to the authorization URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/auth",
      );
    });

    it("should return a 302 response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/auth" },
      });
    });
  });

  describe("when redirectAfterLogin is malicious", () => {
    beforeEach(async () => {
      (await login({
        redirectAfterLogin: "https://malicious.example.com",
      })(mockContext, nextFn)) as Response;
    });

    it("should use the '/' path", () => {
      expect(mockSession.flash).toHaveBeenCalledWith("oidc_tx", {
        codeVerifier: "mock-code-verifier",
        nonce: "mock-nonce",
        state: "mock-state",
        returnTo: "/",
        silent: false,
      });
    });
  });

  describe("when request is not GET", () => {
    let result: Response;

    beforeEach(async () => {
      // @ts-ignore
      mockContext.req.method = "POST";
      result = (await login()(mockContext, nextFn)) as Response;
    });

    it("should use the default / as returnTo", () => {
      expect(mockSession.flash).toHaveBeenCalledWith("oidc_tx", {
        codeVerifier: "mock-code-verifier",
        nonce: "mock-nonce",
        state: "mock-state",
        returnTo: "/",
        silent: false,
      });
    });

    it("should redirect to the authorization URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/auth",
      );
    });

    it("should return a 302 response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/auth" },
      });
    });
  });

  describe("when silent parameter is true", () => {
    let result: Response;

    beforeEach(async () => {
      result = (await login({ silent: true })(mockContext, nextFn)) as Response;
    });

    it("should add prompt=none to the options", () => {
      expect(toSearchParams).toHaveBeenCalledWith(
        expect.objectContaining({
          prompt: "none",
        }),
      );
    });

    it("should set silent flag in the session", () => {
      expect(mockSession.flash).toHaveBeenCalledWith(
        "oidc_tx",
        expect.objectContaining({
          silent: true,
        }),
      );
    });

    it("should redirect to the authorization URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/auth",
      );
    });

    it("should return a 302 response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/auth" },
      });
    });
  });

  describe("when authorizationParams is provided", () => {
    let result: Response;

    beforeEach(async () => {
      result = (await login({
        authorizationParams: {
          prompt: "consent",
          acr_values: "level1",
          login_hint: "user@example.com",
        },
      })(mockContext, nextFn)) as Response;
    });

    it("should merge authorizationParams with configuration authorizationParams", () => {
      expect(toSearchParams).toHaveBeenCalledWith(
        expect.objectContaining({
          prompt: "consent",
          acr_values: "level1",
          login_hint: "user@example.com",
        }),
      );
    });

    it("should maintain original authorizationParams properties", () => {
      expect(toSearchParams).toHaveBeenCalledWith(
        expect.objectContaining({
          response_type: mockConfiguration.authorizationParams.response_type,
          scope: mockConfiguration.authorizationParams.scope,
        }),
      );
    });

    it("should redirect to the authorization URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/auth",
      );
    });

    it("should return a 302 response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/auth" },
      });
    });
  });

  describe("when both silent and authorizationParams.prompt are specified", () => {
    beforeEach(async () => {
      (await login({
        silent: true,
        authorizationParams: {
          prompt: "consent",
        },
      })(mockContext, nextFn)) as Response;
    });

    it("should override prompt with none due to silent parameter", () => {
      expect(toSearchParams).toHaveBeenCalledWith(
        expect.objectContaining({
          prompt: "none",
        }),
      );
    });

    it("should maintain other authorizationParams properties", () => {
      expect(toSearchParams).toHaveBeenCalledWith(
        expect.objectContaining({
          response_type: mockConfiguration.authorizationParams.response_type,
          scope: mockConfiguration.authorizationParams.scope,
        }),
      );
    });

    it("should set silent flag in the session", () => {
      expect(mockSession.flash).toHaveBeenCalledWith(
        "oidc_tx",
        expect.objectContaining({
          silent: true,
        }),
      );
    });

    it("should redirect to the authorization URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/auth",
      );
    });
  });

  describe("when forwardQueryParams is provided", () => {
    let result: Response;

    beforeEach(async () => {
      // Mock the query parameters in the request
      mockContext.req.query = vi.fn().mockImplementation((param) => {
        const params: Record<string, string> = {
          locale: "en-US",
          campaign: "spring2025",
          empty: "",
        };
        return params[param] || null;
      });

      result = (await login({
        forwardAuthorizationParams: ["locale", "campaign", "nonexistent"],
      })(mockContext, nextFn)) as Response;
    });

    it("should forward specified query parameters to the authorization request", () => {
      expect(toSearchParams).toHaveBeenCalledWith(
        expect.objectContaining({
          locale: "en-US",
          campaign: "spring2025",
        }),
      );
    });

    it("should not forward non-existent query parameters", () => {
      const searchParamsArg = (toSearchParams as Mock).mock.calls[0][0];
      expect(searchParamsArg).not.toHaveProperty("nonexistent");
    });

    it("should not forward empty query parameters", () => {
      const searchParamsArg = (toSearchParams as Mock).mock.calls[0][0];
      expect(searchParamsArg).not.toHaveProperty("empty");
    });

    it("should maintain original authorization parameters", () => {
      expect(toSearchParams).toHaveBeenCalledWith(
        expect.objectContaining({
          response_type: mockConfiguration.authorizationParams.response_type,
          scope: mockConfiguration.authorizationParams.scope,
        }),
      );
    });

    it("should redirect to the authorization URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/auth",
      );
    });

    it("should return a 302 response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/auth" },
      });
    });
  });
});
