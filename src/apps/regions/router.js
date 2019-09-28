require('module-alias/register');

const express = require('express');
// eslint-disable-next-line import/no-unresolved
const { wrapAsync } = require('@middlewares');
const { getRegions } = require('./services');

const app = express();

app.get('/', wrapAsync(async (req, res) => {
  const response = await getRegions();

  res.json(response);
}));

module.exports = app;
