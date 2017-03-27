const AuthLocal = require('../../auth/local');

function setup(app) {
  // TODO: add captcha to prevent naughty people
  app.delete('/api/account/', (req, res) => {
    if (!req.user) {
      res.send({ status: false, msg: 'Not logged in' });
    }
    AuthLocal.user.deleteUser(req.user._id)
      .then(status => res.send({ status: status.result.n === 1 }))
      .catch(() => res.send({ status: false, msg: `ERROR DELETING ${req.user._id}` }))
      .then(() => {
        req.logout();
      });
  });
}

module.exports = setup;
