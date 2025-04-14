import { Context } from 'hono';
import { Buffer } from 'node:buffer';
import { Configuration } from '../config/Configuration';
import initDebug from '../utils/debug';

const debug = initDebug('getLoginState');

export type getLoginState = (c: Context, options: Configuration & { returnTo?: string }) => any;

/**
 * Generate the state value for use during login transactions. It is used to store the intended
 * return URL after the user authenticates. State is not used to carry unique PRNG values here
 * because the library utilizes either nonce or PKCE for CSRF protection.
 *
 * @param {RequestHandler} req
 * @param {object} options
 *
 * @return {object}
 */
export function defaultState(c: Context, options: Configuration & { returnTo?: string }): object {
  const state = { returnTo: options.returnTo || c.req.url };
  debug('adding default state %O', state);
  return state;
}

/**
 * Prepare a state object to send.
 *
 * @param {object} stateObject
 *
 * @return {string}
 */
export function encodeState(stateObject: {
  nonce?: string;
  code_verifier?: string;
  max_age?: number;
}): string {
  // this filters out nonce, code_verifier, and max_age from the state object so that the values are
  // only stored in its dedicated transient cookie
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { nonce, code_verifier, max_age, ...filteredState } = stateObject;
  return Buffer.from(JSON.stringify(filteredState)).toString('base64url');
}

/**
 * Decode a state value.
 *
 * @param {string} stateValue
 *
 * @return {object}
 */
export function decodeState(stateValue: string): any {
  try {
    return JSON.parse(Buffer.from(stateValue, 'base64url').toString());
  } catch (e) {
    debug('error decoding state value %O', e);
    return false;
  }
}
