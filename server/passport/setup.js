const LocalStrategy = require('passport-local').Strategy;
const AuthLocal = require('../auth/local');
const passport = require('passport');

function setup(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });

  passport.deserializeUser((id, cb) => {
    AuthLocal.user.findById(id).then((user) => {
      if (user) {
        cb(null, user);
      } else {
        cb('USER NOT FOUND, removing session');
      }
    });
  });

  passport.use('local-login', new LocalStrategy(
      { passReqToCallback: true },
      (req, username, password, done) => {
        AuthLocal.user.login(username, password).then((res) => {
          if (res.success) {
            done(null, res.user);
          } else {
            done(null, false, res);
          }
        }).catch((err) => {
          done(null, false, err);
        });
      })
  );
  return passport;
}

module.exports = setup;
