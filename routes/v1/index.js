const Router = require('koa-router');
const users = require('./users/routes');

const v1 = new Router({
  prefix: '/v1',
});

v1.use(users.routes());

module.exports = v1;
