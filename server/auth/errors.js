/* eslint no-plusplus: 0 */
let i = 0;

module.exports = {
  USER_ALEADY_EXISTS: i++,
  UNREG_USER_ALEADY_EXISTS: i++,
  REG_INVALID_DETAILS: i++,
  LOGIN_INVALID_CREDENTIALS: {
    code: i++,
    msg: 'Invalid username / password combination'
  },
  INVALID_CAPTCHA: i++,
  CRYPT_ERROR: i++,
  UNKNOWN: {
    code: i++,
    msg: 'Unknown error'
  }
};
