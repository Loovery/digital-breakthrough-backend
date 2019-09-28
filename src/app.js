require('module-alias/register');
// eslint-disable-next-line import/no-unresolved,node/no-missing-require
require('@auth/services/checkAuth');
require('./db');
require('dotenv').config();

// const cluster = require('express-cluster');
const express = require('express');
const helmet = require('helmet');
const errorHandler = require('errorhandler');
const cors = require('cors');
const { printIp, handleAsyncExceptions } = require('./utils');
const routes = require('./router');

const {
  APP_HOST,
  APP_PORT,
  PORT,
  APP_BASE_URL,
} = process.env;

const port = PORT || APP_PORT;

function run() {
  const app = express();

  app.use(helmet());
  app.use(helmet.hidePoweredBy());

  app.set('root', `${__dirname}/..`);

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.set('baseUrl', APP_BASE_URL);

  app.use('/api/v1', routes);
  app.use(errorHandler());

  app.listen(port, APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`App running on http://${APP_HOST}:${port}`);
    printIp();
  });
}

module.exports = run;

if (require.main === module) {
  handleAsyncExceptions();
  run();
}
