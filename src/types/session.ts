import { Session } from "@jfromaniello/hono-sessions";
import * as oidc from "openid-client";

/**
 * The session payload stored once the user is authenticated.
 * This is stored in session.oidc
 */
export interface OIDCAuthenticatedSession {
  /**
   * The set of tokens returned by the OIDC provider.
   */
  tokens: oidc.TokenEndpointResponse;

  /**
   * The date the token was requested in seconds since the epoch.
   * This is used to determine if the token is expired.
   * @default Date.now() / 1000
   */
  requestedAt: number;
}

/**
 * The session payload stored during the login process.
 * This is stored in session.oidc_tx
 */
export interface OIDCTransaction {
  codeVerifier?: string;
  nonce: string;
  state: string;
  returnTo?: string;
  silent: boolean;
}

/**
 * Extend the Hono session context to include
 * OIDC session information.
 */
export type OIDCSession<T = object> = Session<
  {
    /**
     * The information about the OIDC session.
     */
    oidc?: OIDCAuthenticatedSession;

    /**
     * The information about the OIDC transaction.
     */
    oidc_tx?: OIDCTransaction;
  } & T
>;
