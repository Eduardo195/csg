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

module.exports = (un, pwd) => un && pwd &&
      un !== pwd &&
      isPasswordValid(pwd) &&
      isUsernameValid(un);
