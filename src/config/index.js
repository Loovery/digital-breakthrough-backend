const { getUserRoles } = require('./userRoles');
require('dotenv').config();

const {
  TOKEN_SECRET,
} = process.env;

module.exports = {
  TOKEN_SECRET,

  USER_ROLES: getUserRoles(),
};
