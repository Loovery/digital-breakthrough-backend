import { getBornAndDead, getPerinatals } from './services';

require('module-alias/register');

const express = require('express');
// eslint-disable-next-line import/no-unresolved
const { wrapAsync } = require('@middlewares');

const app = express();

app.get('/', wrapAsync(async (req, res) => {
  const response = await getPerinatals();
  res.json(response);
}));

app.get('/born_and_dead', wrapAsync(async (req, res) => {
  const response = await getBornAndDead();
  res.json(response);
}));

app.get('/born_and_dead', wrapAsync(async (req, res) => {
  const response = await getPerinatals();
  res.json(response);
}));

export default app;
