const Router = require('koa-router');
// const User = require('./model');
// const { auth } = require('../../../middleware');

const router = new Router({
  prefix: '/test',
});

router.get('/', async (ctx) => {
  try {
    ctx.status = 201;
    ctx.body = 'Hello World';
    ctx.cookies.set('name', 'value', {
      httpOnly: false,
    });
  } catch (error) {
    ctx.throw(400, error.message);
  }
});

router.get('/remove', async (ctx) => {
  // try {
  //   ctx.status = 200;
  //   ctx.body = 'Deleted';
  //   ctx.cookies.set('token', '', { httpOnly: true });
  // } catch (error) {
  //   ctx.throw(400, error.message);
  // }
  ctx.status = 401;
  // ctx.redirect('https://youtu.be/RfiQYRn7fBg', 'Hwllo ');
});

module.exports = router;
