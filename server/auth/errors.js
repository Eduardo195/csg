/* eslint no-plusplus: 0 */
let i = 0;

module.exports = {
  USER_ALEADY_EXISTS: {
    code: i++,
    msg: 'User already exists'
  },
  UNREG_USER_ALEADY_EXISTS: i++,
  REG_INVALID_DETAILS: i++,
  INVALID_PASSWORD: {
    code: i++,
    msg: 'Invalid password'
  },
  INVALID_USERNAME: {
    code: i++,
    msg: 'Invalid username'
  },
  INVALID_NIF: {
    code: i++,
    msg: 'Invalid NIF'
  },
  INVALID_PASSWORD_USERNAME_COMBINATION: {
    code: i++,
    msg: 'Invalid username / password combination'
  },
  LOGIN_INVALID_CREDENTIALS: {
    code: i++,
    msg: 'Invalid username / password combination'
  },
  INVALID_CAPTCHA: i++,
  CRYPT_ERROR: i++,
  UNKNOWN: {
    code: i++,
    msg: 'Unknown error'
  },
  USER_NOT_FOUND: {
    code: i++,
    msg: 'User not found'
  },
  INVALID_DETAILS: {
    code: i++,
    msg: 'Invalid details'
  },
  CONTACT_DETAILS_NOT_FOUND: {
    code: i++,
    msg: 'Contact details not found'
  },
  NIF_SERVER_UNREACHEABLE: {
    code: i++,
    msg: 'NIF server unreachable'
  },
  COMPANY_ALREADY_EXISTS: {
    code: i++,
    msg: 'Company already exists'
  },
  UNV_COMPANY_ALREADY_EXISTS: {
    code: i++,
    msg: 'Unverified Company already exists'
  },
  REGISTER_COMPANY_EMAIL_SENDING_FAILED: {
    code: i++,
    msg: 'Confirmation email sending failed'
  }
};
