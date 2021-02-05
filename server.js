const http = require('http');
const { logger } = require('./middleware/logger');
const app = require('./app');

const SERVER = http.createServer(app.callback());

const PORT = process.env.PORT || 5000;
SERVER.listen(PORT, '0.0.0.0', () => {
  logger.info(`Running on port: ${PORT}`);
});
