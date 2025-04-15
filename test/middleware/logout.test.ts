/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from "hono";
import * as oidc from "openid-client";
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { getConfiguration } from "../../src/config";
import { resumeSilentLogin } from "../../src/middleware";
import { logout } from "../../src/middleware/logout";

// Mock dependencies
vi.mock("openid-client", () => ({
  buildEndSessionUrl: vi.fn(),
}));

vi.mock("../../src/config", () => ({
  getConfiguration: vi.fn(),
}));

vi.mock("../../src/middleware/silentLogin", () => ({
  resumeSilentLogin: vi.fn(),
}));

describe("logout middleware", () => {
  let mockContext: Context;
  let mockSession: any;
  let mockOidcSession: any;
  let mockConfiguration: any;
  const nextFn = vi.fn();
  const resumeSilentLoginMiddleware = vi.fn();
  beforeEach(() => {
    vi.resetAllMocks();

    // Mock session data
    mockSession = {
      get: vi.fn(),
      set: vi.fn(),
      forget: vi.fn(),
    };

    (resumeSilentLogin as Mock).mockReturnValue(resumeSilentLoginMiddleware);
    // Mock OIDC session data
    mockOidcSession = {
      tokens: {
        id_token: "mock-id-token",
        access_token: "mock-access-token",
      },
    };

    mockSession.get.mockReturnValue(mockOidcSession);

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
      redirect: vi.fn().mockImplementation((url) => {
        return { status: 302, headers: { location: url } };
      }),
    } as unknown as Context;

    // Create mock configuration
    mockConfiguration = {
      baseURL: "https://app.example.com",
      idpLogout: false,
    };

    // Setup the getConfiguration mock
    (getConfiguration as Mock).mockReturnValue(mockConfiguration);

    // Mock the buildEndSessionUrl function
    (oidc.buildEndSessionUrl as Mock).mockReturnValue(
      "https://idp.example.com/logout",
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("when user has an active session", () => {
    let result: Response;

    beforeEach(async () => {
      result = (await logout()(mockContext, nextFn)) as Response;
    });

    it("should retrieve the OIDC session from the session store", () => {
      expect(mockSession.get).toHaveBeenCalledWith("oidc");
    });

    it("should clear the OIDC session", () => {
      expect(mockSession.forget).toHaveBeenCalledWith("oidc");
    });

    it("should redirect to the root path by default", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith("/");
    });

    it("should return the redirect", () => {
      expect(result).toEqual({ status: 302, headers: { location: "/" } });
    });

    it("should pause silent login", () => {
      expect(resumeSilentLoginMiddleware).toHaveBeenCalledWith(
        mockContext,
        nextFn,
      );
    });
  });

  describe("when redirectAfterLogout parameter is provided", () => {
    let result: Response;

    beforeEach(async () => {
      result = (await logout({
        redirectAfterLogout: "/custom-logout-page",
      })(mockContext, nextFn)) as Response;
    });

    it("should redirect to the specified redirectAfterLogout URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith("/custom-logout-page");
    });

    it("should clear the OIDC session", () => {
      expect(mockSession.forget).toHaveBeenCalledWith("oidc");
    });

    it("should return the redirect response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "/custom-logout-page" },
      });
    });
  });

  describe("when session is not available", () => {
    let result: Response;

    beforeEach(async () => {
      (mockContext.get as Mock).mockImplementation(() => undefined);
      result = (await logout()(mockContext, nextFn)) as Response;
    });

    it("should not attempt to clear the session", () => {
      expect(mockSession.set).not.toHaveBeenCalled();
    });

    it("should still redirect to the default path", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith("/");
    });

    it("should return the redirect response", () => {
      expect(result).toEqual({ status: 302, headers: { location: "/" } });
    });
  });

  describe("when OIDC session is not available", () => {
    let result: Response;

    beforeEach(async () => {
      mockSession.get.mockReturnValue(undefined);
      result = (await logout()(mockContext, nextFn)) as Response;
    });

    it("should not attempt to clear the session", () => {
      expect(mockSession.set).not.toHaveBeenCalled();
    });

    it("should still redirect to the default path", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith("/");
    });

    it("should return the redirect response", () => {
      expect(result).toEqual({ status: 302, headers: { location: "/" } });
    });
  });

  describe("when IdP logout is enabled", () => {
    let result: Response;

    beforeEach(async () => {
      // Configure with IdP logout enabled
      mockConfiguration.idpLogout = true;
      result = (await logout()(mockContext, nextFn)) as Response;
    });

    it("should build the end session URL", () => {
      expect(oidc.buildEndSessionUrl).toHaveBeenCalledWith(
        mockContext.var.oidcClient,
        {
          id_token_hint: mockOidcSession.tokens.id_token,
          post_logout_redirect_uri: "https://app.example.com/",
        },
      );
    });

    it("should redirect to the IdP end session URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/logout",
      );
    });

    it("should clear the OIDC session", () => {
      expect(mockSession.forget).toHaveBeenCalledWith("oidc");
    });

    it("should return the redirect response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/logout" },
      });
    });
  });

  describe("when IdP logout is enabled but no ID token is available", () => {
    let result: Response;

    beforeEach(async () => {
      // Configure with IdP logout enabled but no ID token
      mockConfiguration.idpLogout = true;
      mockOidcSession.tokens.id_token = undefined;
      result = (await logout({
        redirectAfterLogout: "/logged-out",
      })(mockContext, nextFn)) as Response;
    });

    it("should not call buildEndSessionUrl", () => {
      expect(oidc.buildEndSessionUrl).not.toHaveBeenCalled();
    });

    it("should redirect to the specified URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith("/logged-out");
    });

    it("should clear the OIDC session", () => {
      expect(mockSession.forget).toHaveBeenCalledWith("oidc");
    });

    it("should return the redirect response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "/logged-out" },
      });
    });
  });

  describe("when IdP logout is enabled with a custom redirect", () => {
    let result: Response;

    beforeEach(async () => {
      // Configure with IdP logout enabled and custom redirect
      mockConfiguration.idpLogout = true;
      result = (await logout({
        redirectAfterLogout: "/custom-logged-out",
      })(mockContext, nextFn)) as Response;
    });

    it("should build the end session URL with the custom redirect URI", () => {
      expect(oidc.buildEndSessionUrl).toHaveBeenCalledWith(
        mockContext.var.oidcClient,
        {
          id_token_hint: mockOidcSession.tokens.id_token,
          post_logout_redirect_uri: "https://app.example.com/custom-logged-out",
        },
      );
    });

    it("should redirect to the IdP end session URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith(
        "https://idp.example.com/logout",
      );
    });

    it("should return the redirect response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "https://idp.example.com/logout" },
      });
    });

    it("should clear the OIDC session", () => {
      expect(mockSession.forget).toHaveBeenCalledWith("oidc");
    });
  });
});
