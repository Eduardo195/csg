const errors = require('./errors');
const validator = require('./validateCredentials');

const NIF_REGEX = /^[0-9]+$/;
const NIF_LENGTH = 9;

function isNifValid(nif) {
  return nif.length === NIF_LENGTH &&
    NIF_REGEX.test(nif);
}

module.exports = (un, pwd, nif) => new Promise((resolve, reject) => validator(un, pwd).then(() => {
  if (!nif || !isNifValid(nif)) {
    reject(errors.INVALID_NIF);
  } else if (nif == pwd) { // eslint-disable-line eqeqeq
    reject(errors.INVALID_DETAILS);
  } else {
    resolve();
  }
}));
