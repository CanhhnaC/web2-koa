const Router = require('koa-router');
const users = require('./users/routes');
const test = require('./test/routes');

const v1 = new Router({
  prefix: '/v1',
});

v1.use(users.routes());
v1.use(test.routes());

module.exports = v1;
