/* eslint no-plusplus: 0 */
let i = 0;

module.exports = {
  INVALID_CAPTCHA: {
    code: `service_captcha_${i++}`,
    msg: 'Invalid captcha'
  },
  CAPTCHA_SERVER_UNREACHEABLE: {
    code: `service_captcha_${i++}`,
    msg: 'Captcha server unreachable'
  }
};
