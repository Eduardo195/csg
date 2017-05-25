function setup(app, passport) {
  // POST === login
  app.post('/api/session', (req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => { // eslint-disable-line consistent-return
      if (err) {
        return next(err); // Throws a 500 error
      }
      if (!user) {
        return res.send({ success: false, msg: info.message });
      }
      req.login(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);  // Throw 500
        }
        return res.send({ success: true, user });
      });
    })(req, res, next);
  }); // app end

  // DELETE === logout
  app.delete('/api/session', (req, res) => {
    if (req && req.logout) {
      req.logout();
    }
    res.send({ status: true });
  });

  // PUT === restore session
  app.put('/api/session/', (req, res) => {
    if (req.user) {
      res.send({ success: true, user: req.user });
    } else {
      res.send({ success: false });
    }
  });
}

module.exports = setup;
