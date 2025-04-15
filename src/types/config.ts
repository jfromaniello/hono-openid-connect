export interface LogoutToken {
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  jti: string;
  events: {
    "http://schemas.openid.net/event/backchannel-logout": {};
  };
  sid?: string;
}
