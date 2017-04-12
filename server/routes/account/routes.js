const AuthLocal = require('../../auth/local');

function setup(app) {
  console.warn('TODO: require pwd to delete acc');
  app.delete('/api/account/', (req, res) => {
    if (!req.user) {
      res.send({ success: false, msg: 'Not logged in' });
    }
    AuthLocal.user.deleteUser(req.user._id)
      .then(status => res.send({ success: status.result.n === 1 }))
      .catch(() => res.send({ success: false, msg: `ERROR DELETING ${req.user._id}` }))
      .then(() => {
        req.logout();
      });
  });
}

module.exports = setup;
