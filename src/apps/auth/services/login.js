require('module-alias/register');

const { to } = require('await-to-js');
// eslint-disable-next-line import/no-unresolved
const { User } = require('@db/models');
// eslint-disable-next-line import/no-unresolved
const { createTokenWithUserPayload } = require('@utils');


const login = async (email, password) => {
  const [err, user] = await to(User.findOne({ email, password }));

  if (err) throw new Error(err);

  return createTokenWithUserPayload(user);
};

module.exports = login;
