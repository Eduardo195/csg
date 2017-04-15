const AuthLocal = require('../../auth/local');

function setup(app) {
  console.warn('TODO: require pwd to delete acc');
  app.delete('/api/account/', (req, res) => {
    if (!req.user) {
      return res.send({ success: false, msg: 'Not logged in' });
    }
    const id = req.user._id;
    req.logout();
    AuthLocal.user.deleteUser(id)
      .then(status => res.send({ success: status.result.n === 1 }))
      .catch(() => res.send({ success: false, msg: `ERROR DELETING ${id}` }));
  });
}

module.exports = setup;
