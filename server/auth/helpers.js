const bcrypt = require('bcrypt-nodejs');
const { randomBytes } = require('crypto');
const errors = require('./errors');

const HASH_BYTES = 256;

function getRandomBytes() {
  return new Promise((resolve, reject) => {
    randomBytes(HASH_BYTES, (err, buf) => {
      if (err) {
        reject(err);
      } else {
        resolve(buf.toString('hex'));
      }
    });
  });
}

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, null, null, (error, passHash) => {
      if (error) {
        reject({ code: errors.CRYPT_ERROR, msg: error });
      } else {
        resolve(passHash);
      }
    });
  });
}

module.exports = {
  hashPassword,
  getRandomBytes
};
