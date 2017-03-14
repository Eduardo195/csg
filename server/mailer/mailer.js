const Send = require('./core');
const accConfTemplate = require('./templates/accountConfirmation');

module.exports = {
  sendConfirmationEmail(email, hash) {  // eslint-disable-line consistent-return
    if (!hash) {
      return console.log(`ERROR: invalid hash ${hash} for confirmatio email`);
    }
    Send(email, accConfTemplate.getSubject(), accConfTemplate.generate(hash));
  }
};
