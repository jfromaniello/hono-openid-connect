import { Context } from "hono";
import { IDToken } from "oauth4webapi";
import * as oidc from "openid-client";
import { OIDCAuthenticatedSession } from "../types/session";
import { OIDCEnv } from "./honoEnv";

export class OIDCContext {
  private c: Context;
  private oidcSession: OIDCAuthenticatedSession | undefined;

  constructor(c: Context<OIDCEnv>) {
    this.c = c;
    this.oidcSession = c.var.session?.get("oidc") ?? undefined;
  }

  get isAuthenticated(): boolean {
    return this.oidcSession !== undefined;
  }

  get claims(): IDToken | undefined {
    if (!this.isAuthenticated || !this.oidcSession) {
      return undefined;
    }
    return this.oidcSession.claims;
  }

  async fetchUserInfo(): Promise<oidc.UserInfoResponse | undefined> {
    if (!this.isAuthenticated || !this.oidcSession) {
      return undefined;
    }

    const oidcClient = this.c.var.oidcClient!;
    const tokens = this.oidcSession.tokens;
    const claims = this.claims();
    const sub = claims?.sub;

    if (
      sub &&
      tokens.scope &&
      tokens.scope.includes("profile") &&
      tokens.scope.includes("openid")
    ) {
      return await oidc.fetchUserInfo(oidcClient, tokens.access_token, sub);
    }
  }

  get isExpired(): boolean {
    if (!this.oidcSession) {
      return false;
    }
    const requestedAt = this.oidcSession.requestedAt;
    const expiresIn = this.oidcSession.tokens.expires_in;
    if (typeof expiresIn === "undefined") {
      return false;
    }
    const now = Math.floor(Date.now() / 1000);
    return requestedAt + expiresIn < now;
  }

  // Accessor methods to get session data
  get tokens() {
    return this.oidcSession?.tokens;
  }

  get requestedAt() {
    return this.oidcSession?.requestedAt;
  }

  async refresh(
    tokenEndpointParams?: Record<string, string>,
  ): Promise<oidc.TokenEndpointResponse | undefined> {
    if (!this.oidcSession?.tokens.refresh_token) {
      return;
    }

    const oidcClient = this.c.var.oidcClient!;
    const refreshToken = this.oidcSession.tokens.refresh_token;
    const requestedAt = Math.floor(Date.now() / 1000);

    const tokens = await oidc.refreshTokenGrant(
      oidcClient,
      refreshToken,
      tokenEndpointParams,
    );

    const newTokens = {
      ...this.tokens,
      ...tokens,
    };

    const newOIDCSession: OIDCAuthenticatedSession = {
      tokens: newTokens,
      requestedAt,
      claims: tokens.claims(),
    };

    //Store the new OIDC session in the context
    this.oidcSession = newOIDCSession;

    // Store the new OIDC session in the session
    this.c.var.session?.set("oidc", newOIDCSession);

    return newTokens;
  }
}
