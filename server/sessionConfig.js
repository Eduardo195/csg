const secret = require('./secret/sessionSecret');

module.exports = {
  secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000 // 1h
  //  secure: true // TODO: enable when we have ssl
  }
};
