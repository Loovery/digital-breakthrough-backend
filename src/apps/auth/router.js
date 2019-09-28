require('module-alias/register');

const express = require('express');
const Joi = require('@hapi/joi');
const {
  validateRequest,
  wrapAsync,
// eslint-disable-next-line import/no-unresolved
} = require('@middlewares');
const { login, registration, jetcalcAuth } = require('./services');

const app = express();

const schema = {
  body: {
    email: Joi.string().max(200).required(),
    password: Joi.string().max(60).required(),
  },
};

app.post('/login', validateRequest(schema), wrapAsync(async (req, res) => {
  const { email, password } = req.body;

  const response = await login(email, password);

  res.json(response);
}));

const authJetcalcSchema = {
  body: {
    username: Joi.string().max(200).required(),
    password: Joi.string().max(200).required(),
    jetcalcServerId: Joi.string().max(200).required(),
  },
};

app.post('/jetcalc', validateRequest(authJetcalcSchema), wrapAsync(async (req, res) => {
  const { username, password, jetcalcServerId } = req.body;

  const response = await jetcalcAuth(username, password, jetcalcServerId);

  res.json(response);
}));

const userCreateSchema = {
  body: {
    name: Joi.string().min(1).max(100).required(),
    surname: Joi.string().min(1).max(100).required(),
    email: Joi.string().min(5).max(200).required(),
    phone: Joi.string().min(11).max(20).required(),
  },
};

app.post('/registration', validateRequest(userCreateSchema), wrapAsync(async (req, res) => {
  const data = req.body;

  const response = await registration(data);

  res.json(response);
}));

module.exports = app;
