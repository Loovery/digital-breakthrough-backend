import { getRussia } from './services';

require('module-alias/register');

const express = require('express');
// eslint-disable-next-line import/no-unresolved
const { wrapAsync } = require('@middlewares');

const app = express();

app.get('/', wrapAsync(async (req, res) => {
  const response = await getRussia();

  res.json(response);
}));

export default app;
