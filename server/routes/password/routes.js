const mailer = require('../../services/mailer/mailer');
const AuthLocal = require('../../auth/local');

function setup(app) {
  app.get('/api/password/reset', (req, res) => {
    AuthLocal.user.requestResetLink(req.query.email).then((hash) => {
      res.send({ success: true });
      mailer.sendResetPasswordEmail(req.query.email, hash);
    }).catch((err) => {
      res.send({ success: false, msg: err });
    });
  });

  app.post('/api/password/reset', (req, res) => {
    AuthLocal.user.resetPassword(req.body.email, req.body.password, req.body.hash).then(() => {
      res.send({ success: true });
    }).catch((err) => {
      res.send({ success: false, msg: err.msg });
    });
  });
}

module.exports = setup;
