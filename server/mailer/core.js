const nodemailer = require('nodemailer');
const { service, from, pass } = require('./credentials');

const transporter = nodemailer.createTransport({ service, auth: { from, pass } });

function send(mailOptions) {
  transporter.sendMail(mailOptions, (error, info) => {  // eslint-disable-line consistent-return
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

module.exports = (to, subject, html) => {
  send({ from: `No-Reply <${from}>`, to, subject, html });
};
