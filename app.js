require('dotenv').config();
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const cors = require('koa2-cors');
const helmet = require('koa-helmet');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const { requestLogger, logger } = require('./middleware/logger');
const { v1 } = require('./routes');
const errors = require('./middleware/errors');

const app = new Koa();

mongoose.connect(process.env.MONGO_HOST, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', (err) => {
  logger.error(err);
});
db.once('connected', () => {
  logger.info('Mongo connected');
  app.emit('ready');
});
db.on('reconnected', () => {
  logger.info('Mongo re-connected');
});
db.on('disconnected', () => {
  logger.info('Mongo disconnected');
});

// Disable console.errors for pino
app.silent = true;

// Error handler
app.use(errors);

app.use(conditional());

app.use(etag());

app.use(bodyParser());

// HTTP header security
app.use(helmet());

// Enable CORS for all routes
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Accept'],
  })
);

// Request logging
app.use(requestLogger);

// V1 routes
app.use(v1.routes());

module.exports = app;
