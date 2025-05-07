/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import * as oidc from "openid-client";
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { getConfiguration } from "../../src/config";
import { OIDCContext } from "../../src/lib/context";
import { OIDCException } from "../../src/lib/Exception";
import { resumeSilentLogin } from "../../src/middleware";
import { callback } from "../../src/middleware/callback";

// Mock dependencies
vi.mock("openid-client", async (importOriginal) => ({
  ...(await importOriginal()),
  authorizationCodeGrant: vi.fn(),
}));

vi.mock("../../src/config", () => ({
  getConfiguration: vi.fn(),
}));

vi.mock("../../src/lib/context", () => ({
  OIDCContext: vi.fn(),
}));

vi.mock("../../src/middleware/silentLogin", () => ({
  resumeSilentLogin: vi.fn(),
}));

describe("callback middleware", () => {
  let mockContext: Context;
  let mockSession: any;
  let mockTokens: any;
  let mockConfiguration: any;
  const nextFn = vi.fn();
  const resumeSilentLoginMiddleware = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();

    (resumeSilentLogin as Mock).mockReturnValue(resumeSilentLoginMiddleware);

    // Mock session data
    mockSession = {
      get: vi.fn(),
      set: vi.fn(),
      flash: vi.fn(),
    };

    mockSession.get.mockReturnValue({
      codeVerifier: "mock-code-verifier",
      nonce: "mock-nonce",
      state: "mock-state",
      returnTo: "/dashboard",
    });

    // Mock tokens returned by authorizationCodeGrant
    mockTokens = {
      access_token: "mock-access-token",
      id_token: "mock-id-token",
      token_type: "Bearer",
      expires_at: 1234567890,
      claims: vi.fn(),
    };

    (oidc.authorizationCodeGrant as Mock).mockResolvedValue(mockTokens);

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
      set: vi.fn(),
      req: {
        url: "https://app.example.com/callback?code=mock-code&state=mock-state",
        raw: {},
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
      tokenEndpointParams: {},
    };

    // Setup the getConfiguration mock
    (getConfiguration as Mock).mockReturnValue(mockConfiguration);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("when callback verification is successful", () => {
    beforeEach(async () => {
      await callback()(mockContext, nextFn);
    });

    it("should retrieve the verification data from the session", () => {
      expect(mockSession.get).toHaveBeenCalledWith("oidc_tx");
    });

    it("should call the resume silent login middleware", () => {
      expect(resumeSilentLoginMiddleware).toHaveBeenCalledWith(
        mockContext,
        nextFn,
      );
    });

    it("should call authorizationCodeGrant with correct parameters", () => {
      expect(oidc.authorizationCodeGrant).toHaveBeenCalledWith(
        mockContext.var.oidcClient,
        mockContext.req.raw,
        {
          pkceCodeVerifier: "mock-code-verifier",
          expectedNonce: "mock-nonce",
          expectedState: "mock-state",
          idTokenExpected: true,
        },
        mockConfiguration.tokenEndpointParams,
      );
    });

    it("should set the auth session in the session store", () => {
      expect(mockSession.set).toHaveBeenCalledWith(
        "oidc",
        expect.objectContaining({
          tokens: mockTokens,
          requestedAt: expect.any(Number),
        }),
      );
    });

    it("should create and set a new OIDCContext", () => {
      expect(OIDCContext).toHaveBeenCalledWith(mockContext);
      expect(mockContext.set).toHaveBeenCalledWith(
        "oidc",
        expect.any(OIDCContext),
      );
    });

    it("should redirect to the returnTo URL by default", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith("/dashboard", 307);
    });
  });

  describe("when redirectAfterLogin parameter is provided", () => {
    let result: Response | void;

    beforeEach(async () => {
      result = (await callback({
        redirectAfterLogin: "/custom-page",
      })(mockContext, nextFn)) as Response;
    });

    it("should redirect to the specified redirectAfterLogin URL", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith("/custom-page", 307);
    });

    it("should return the redirect response", () => {
      expect(result).toEqual({
        status: 302,
        headers: { location: "/custom-page" },
      });
    });
  });

  describe("when redirectAfterLogin is set to false", () => {
    let result: Response | void;

    beforeEach(async () => {
      result = await callback({ redirectAfterLogin: false })(
        mockContext,
        nextFn,
      );
    });

    it("should not redirect but continue to the next middleware", () => {
      expect(mockContext.redirect).not.toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe("when returnTo is not provided in the verification data", () => {
    beforeEach(async () => {
      // Mock session without returnTo
      mockSession.get.mockReturnValue({
        codeVerifier: "mock-code-verifier",
        nonce: "mock-nonce",
        state: "mock-state",
      });

      await callback()(mockContext, nextFn);
    });

    it("should redirect to root (/) as fallback", () => {
      expect(mockContext.redirect).toHaveBeenCalledWith("/", 307);
    });
  });

  describe("when verification data is missing from session", () => {
    beforeEach(() => {
      mockSession.get.mockReturnValue(null);
    });

    it("should throw 401 Unauthorized exception", async () => {
      await expect(callback()(mockContext, nextFn)).rejects.toThrow(
        HTTPException,
      );
      await expect(callback()(mockContext, nextFn)).rejects.toThrow(
        "Invalid callback state",
      );
    });
  });

  describe("when authorizationCodeGrant throws an error", () => {
    beforeEach(() => {
      (oidc.authorizationCodeGrant as Mock).mockRejectedValue(
        new Error("Authorization code grant failed"),
      );
    });

    it("should propagate the error", async () => {
      await expect(callback()(mockContext, nextFn)).rejects.toThrow(
        "Authorization code grant failed",
      );
    });
  });

  describe("when callback verification returns an error", () => {
    let err: Error;
    beforeEach(async () => {
      (oidc.authorizationCodeGrant as Mock).mockImplementation(() => {
        throw new oidc.ResponseBodyError("Invalid authorization code", {
          cause: {
            error: "invalid_grant",
            error_description: "The authorization code is invalid or expired",
          },
          response: new Response("invalid grant", { status: 403 }),
        });
      });

      try {
        await callback()(mockContext, nextFn);
      } catch (error) {
        err = error;
      }
    });

    it("should retrieve the verification data from the session", () => {
      expect(mockSession.get).toHaveBeenCalledWith("oidc_tx");
    });

    it("should call the resume silent login middleware", () => {
      expect(resumeSilentLoginMiddleware).toHaveBeenCalledWith(
        mockContext,
        nextFn,
      );
    });

    it("should call authorizationCodeGrant with correct parameters", () => {
      expect(oidc.authorizationCodeGrant).toHaveBeenCalledWith(
        mockContext.var.oidcClient,
        mockContext.req.raw,
        {
          pkceCodeVerifier: "mock-code-verifier",
          expectedNonce: "mock-nonce",
          expectedState: "mock-state",
          idTokenExpected: true,
        },
        mockConfiguration.tokenEndpointParams,
      );
    });

    it("should set the auth session in the session store", () => {
      expect(mockSession.set).not.toHaveBeenCalled();
    });

    it("should create and set a new OIDCContext", () => {
      expect(OIDCContext).not.toHaveBeenCalled();
      expect(mockContext.set).not.toHaveBeenCalledWith(
        "oidc",
        expect.any(OIDCContext),
      );
    });

    it("should redirect to the returnTo URL by default", () => {
      expect(mockContext.redirect).not.toHaveBeenCalledWith("/dashboard");
    });

    it("should throw the right error", () => {
      expect(err).toBeInstanceOf(OIDCException);
      expect(err).toMatchInlineSnapshot(
        `[Error: The authorization code is invalid or expired]`,
      );
    });
  });
});
