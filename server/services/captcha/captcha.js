const request = require('request');
const errors = require('./errors');
const SECRET = require('./secret/recaptchaKey');

const URL = 'https://www.google.com/recaptcha/api/siteverify';

function verify(captchaResponse) {
  return new Promise((resolve, reject) => {
    request.post(URL, { form: {
      secret: SECRET,
      response: captchaResponse
    } }, (error, response, body) => {
      if (error) {
        console.log('error contacting captcha server', error);
        return reject(errors.CAPTCHA_SERVER_UNREACHEABLE);
      }
      const bodyData = JSON.parse(body);
      if (!bodyData || !bodyData.success) {
        reject(errors.INVALID_CAPTCHA);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  verify
};
