const secret = require('./secret/sessionSecret');

module.exports = {
  secret,
  resave: false,
  saveUninitialized: false
};
