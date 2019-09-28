require('module-alias/register');
const generator = require('generate-password');

const { to } = require('await-to-js');
// eslint-disable-next-line import/no-unresolved
const { User } = require('@db/models');
// eslint-disable-next-line import/no-unresolved
const { createTokenWithUserPayload } = require('@utils');

const registration = async (data) => {
  const password = generator.generate({
    length: 5,
    numbers: true,
  });

  const [err, userData] = await to(User.create({
    role: 'executor',
    password,
    ...data,
  }));

  if (err) throw new Error(err);

  return createTokenWithUserPayload(userData);
};

module.exports = registration;
