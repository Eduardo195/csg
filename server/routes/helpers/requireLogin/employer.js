const errors = require('./errors');

module.exports = (req, res, next) => {
  if (req.isAuthenticated() && req.user.type === 'employer') {
    return next();
  }
  throw errors.LOGIN_REQUIRED_EMPLOYER
  ;
};
