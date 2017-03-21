const nodemailer = require('nodemailer');
const errors = require('./errors');
const { service, user, pass } = require('./credentials');

const transporter = nodemailer.createTransport({ service, auth: { user, pass } });

module.exports = (to, subject, html) => transporter.sendMail(
    { from: `No-Reply <${user}>`, to, subject, html }
  ).catch((err) => {
    console.log(err);
    throw errors.EMAIL_SENDING_FAILED; // throw custom error
  });
