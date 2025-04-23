import debug from "debug";

export default (name: string) => {
  return debug(`hono-openid-connect:${name}`);
};
