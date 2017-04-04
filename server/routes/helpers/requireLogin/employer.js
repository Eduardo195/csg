const errors = require('./errors');

module.exports = (req, res, next) => {
  if (req.isAuthenticated() && req.user.type === 'employer') {
    return next();
  }
  next(errors.LOGIN_REQUIRED_EMPLOYER);
};
