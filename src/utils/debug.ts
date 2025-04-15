import debug from 'debug';
export default (name: string) => debug('hono-openid-connect').extend(name);
