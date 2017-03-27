const LocalStrategy = require('passport-local').Strategy;
const AuthLocal = require('../auth/local');
const passport = require('passport');

function setup(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, cb) => {
    console.log('serializing', user, cb);
    cb(null, user._id); // eslint-disable-line no-underscore-dangle
  });

  passport.deserializeUser((id, cb) => {
    console.log(`deserializing ${id}`);
    AuthLocal.user.findById(id).then((user) => {
      console.log('user ::::', user);
      if (user) {
        cb(null, user);
      } else {
        cb('USER NOUT FOUND');
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
