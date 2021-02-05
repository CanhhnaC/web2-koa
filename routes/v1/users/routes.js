const Router = require('koa-router');
// const User = require('./model');
// const { auth } = require('../../../middleware');

const router = new Router({
  prefix: '/users',
});

router.get('/', async (ctx) => {
  try {
    ctx.status = 201;
    ctx.body = 'Hello World';
  } catch (error) {
    ctx.throw(400, error.message);
  }
});

module.exports = router;
