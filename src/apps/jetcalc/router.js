require('module-alias/register');

const express = require('express');
const Joi = require('@hapi/joi');
// eslint-disable-next-line import/no-unresolved
const { loggedIn, validateRequest, wrapAsync } = require('@middlewares');
const { saveJetcalcServer } = require('./services');

const app = express();

const saveJetcalcServerSchema = {
  body: {
    servername: Joi.string().min(1).max(100).required(),
    domainname: Joi.string().min(1).max(100).required(),
  },
};

app.post('/new', loggedIn, validateRequest(saveJetcalcServerSchema), wrapAsync(async (req, res) => {
  const data = req.body;

  const response = await saveJetcalcServer(data);

  res.json(response);
}));

module.exports = app;
