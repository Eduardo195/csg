const request = require('request');
const SECRET = require('../secret/recaptchaKey');
const { INVALID_CAPTCHA } = require('../auth/errors');

const URL = 'https://www.google.com/recaptcha/api/siteverify';

function verify(captchaResponse) {
  return new Promise((resolve, reject) => {
    request.post(URL, { form: {
      secret: SECRET,
      response: captchaResponse
    } }, (error, response, body) => {
      if (error) {
        console.log('error contacting captcha server', error);
        reject(error);
      }
      const bodyData = JSON.parse(body);
      if (!bodyData || !bodyData.success) {
        reject({ code: INVALID_CAPTCHA, msg: 'Invalid captcha' });
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  verify
};
