require('module-alias/register');

const express = require('express');
// eslint-disable-next-line import/no-unresolved,node/no-missing-require
const auth = require('@auth/router');
// eslint-disable-next-line import/no-unresolved,node/no-missing-require
const regions = require('@regions/router');
// eslint-disable-next-line import/no-unresolved,node/no-missing-require
const jetcalc = require('@jetcalc/router');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello, digital breakthrough! Server is up and running' });
});

app.use('/auth', auth);
app.use('/regions', regions);
app.use('/jetcalc', jetcalc);

// the catch all route
app.all('*', (req, res) => {
  res.status(404).json({ msg: '404: Not Found' });
});

module.exports = app;
