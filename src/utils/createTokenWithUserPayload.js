const jwt = require('jsonwebtoken');

const {
  TOKEN_SECRET,
// eslint-disable-next-line import/no-unresolved
} = require('@config');

const createTokenWithUserPayload = (user) => {
  const userPayload = {
    _id: user.id,
    name: user.name,
    surname: user.surname,
    role: user.role,
    phone: user.phone,
    email: user.email,
  };

  const accessToken = jwt.sign(userPayload, TOKEN_SECRET);

  return {
    accessToken,
    user: { ...userPayload },
  };
};

module.exports = createTokenWithUserPayload;
