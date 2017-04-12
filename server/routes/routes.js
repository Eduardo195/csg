const account = require('./account/routes');
const session = require('./session/routes');
const register = require('./register/routes');
const password = require('./password/routes');
const opportunity = require('./opportunity/routes');
const confirmEmail = require('./confirmEmail/routes');
const applications = require('./applications/routes');
const cv = require('./cv/routes');
const profile = require('./profile/routes');

function setup(app, passport) {
  account(app);
  session(app, passport);
  register(app);
  password(app);
  opportunity(app);
  confirmEmail(app);
  applications(app);
  cv(app);
  profile(app);
}

module.exports = setup;
