const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('bearer', { session: false }, (err, user, info) => {
    if (err) {
      return res.json({ error: info.message || 'Invalid Token' });
    }

    // authentication error
    if (!user) {
      return res.json({ error: info.message || 'Invalid Token' });
    }

    req.user = user;
    req.authInfo = info;

    return next();
  })(req, res, next);
};
