const CaptchaService = require('../../services/captcha/captcha');
const mailer = require('../../services/mailer/mailer');
const AuthLocal = require('../../auth/local');

function setup(app) {
  app.post('/api/register/employer', (req, res) => {
    AuthLocal.employer.register(
      req.body.captcha, req.body.username, req.body.password, req.body.nif
    ).then((email) => {
      res.send({ success: true, email });
    }).catch((err) => {
      res.send({ success: false, msg: err && err.msg });
    });
  });

  app.post('/api/register/user', (req, res) => {
    CaptchaService.verify(req.body.captcha).then(() => {
      const { username, password } = req.body;
      return AuthLocal.user.register(username, password).then((confHash) => {
        return mailer.sendConfirmationEmail(username, confHash);
      });
    }).then(() => {
      res.send({ success: true });
    }).catch((err) => {
      console.log(err);
      res.send({ success: false, msg: err.msg });
    });
  });
}

module.exports = setup;
