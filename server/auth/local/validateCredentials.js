const errors = require('./errors');

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 25;

const USERNAME_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 25;

// TODO: is there a point in having a more strict regex?
const EMAIL_REGEX = /\S+@\S+\.\S+/;

function isPasswordValid(pwd) {
  return pwd.length >= PASSWORD_MIN_LENGTH &&
    pwd.length <= PASSWORD_MAX_LENGTH;
}

function isUsernameValid(un) {
  return un.length >= USERNAME_MIN_LENGTH &&
    un.length <= USERNAME_MAX_LENGTH &&
    EMAIL_REGEX.test(un);
}

module.exports = (un, pwd) => new Promise((resolve, reject) => {
  if (!un || !isUsernameValid(un)) {
    reject(errors.INVALID_USERNAME);
  } else if (!pwd || !isPasswordValid(pwd)) {
    reject(errors.INVALID_PASSWORD);
  } else if (un === pwd) {
    reject(errors.INVALID_PASSWORD_USERNAME_COMBINATION);
  } else {
    resolve();
  }
});
