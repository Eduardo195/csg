const Send = require('./core');
const accConfTemplate = require('./templates/accountConfirmation');
const passResetTemplate = require('./templates/passwordReset');

module.exports = {
  sendConfirmationEmail(email, hash) {  // eslint-disable-line consistent-return
    if (!hash) {
      return console.log(`ERROR: invalid hash ${hash} for confirmatio email`);
    }
    Send(email, accConfTemplate.getSubject(), accConfTemplate.generate(hash));
  },
  sendResetPasswordEmail(email, hash) {  // eslint-disable-line consistent-return
    if (!hash) {
      return console.log(`ERROR: invalid hash ${hash} for Password Reset email`);
    }
    Send(email, passResetTemplate.getSubject(), passResetTemplate.generate(hash));
  }
};
