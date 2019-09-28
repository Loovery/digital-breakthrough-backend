require('module-alias/register');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const BearerStrategy = require('passport-http-bearer').Strategy;
// eslint-disable-next-line import/no-unresolved
const { TOKEN_SECRET } = require('@config');

passport.use(new BearerStrategy(
  ((token, done) => {
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      if (err) { return done(null, false); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'read' });
    });
  }),
));
