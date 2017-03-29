const errors = require('./errors');

module.exports = (req, res, next) => {
  if (req.isAuthenticated() && req.user.type === 'candidate') {
    return next();
  }
  throw errors.LOGIN_REQUIRED_CANDIDATE;
  // res.send({ success: false, msg: errors.LOGIN_REQUIRED_CANDIDATE.msg });
};
