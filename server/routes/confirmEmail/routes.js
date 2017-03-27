const AuthLocal = require('../../auth/local');

function setup(app) {
  app.get('/api/confirmEmail/:hash', (req, res) => {
    AuthLocal.user.verifyAccount(req.params.hash).then(() => {
      res.send({ success: true });
    }).catch((err) => {
      res.send({ success: false, msg: err && err.msg });
    });
  });
}

module.exports = setup;
