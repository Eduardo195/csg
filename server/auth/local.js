/* eslint no-use-before-define: 0 */
const bcrypt = require('bcrypt-nodejs');
const db = require('../../shared/db/authConnector');
const validateCredentials = require('./validateCredentials');
const errors = require('./errors');
const { randomBytes } = require('crypto');

const HASH_BYTES = 256;

module.exports = {
  checkHash(hash) {
    return db.confirmHash(hash)
      .then(user => user ? db.register(user) : null);  // eslint-disable-line no-confusing-arrow
  },
  // TODO: needs a refactor
  registerUnconfirmed(username, password) {
    return new Promise((resolve, reject) => { // eslint-disable-line consistent-return
      if (!validateCredentials(username, password)) {
        return reject({ code: errors.INVALID_DETAILS, msg: `Invalid details '${username}' '${password}'` });
      }
      db.getByUsername(username).then((user) => {
        if (user) {
          reject({ code: errors.USER_ALEADY_EXISTS, msg: `User '${username}' already exists` });
        } else {
          db.getUnregisterdUserByUsername(username).then((unregUser) => {
            if (unregUser) {
              reject({ code: errors.UNREG_USER_ALEADY_EXISTS, msg: `User '${username}' already exists but is unregistered` });
            } else {
              bcrypt.hash(password, null, null, (error, passHash) => {
                if (error) {
                  reject({ code: errors.CRYPT_ERROR, msg: error });
                } else {
                  return getRandomBytes()
                    .then(hash => db.registerUnconfirmed(username, passHash, hash)
                      .then(userData => resolve(userData))
                      .catch(() => reject(errors.UNKNOWN)));
                }
              });
            }
          });
        }
      });
    });
  },
  login(username, password) {
    return db.getByUsername(username).then((user) => {
      if (!user) {
        throw errors.LOGIN_INVALID_CREDENTIALS;
      }
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) {
            reject(errors.UNKNOWN);
          }
          if (!res) {
            reject(errors.LOGIN_INVALID_CREDENTIALS);
          }
          resolve({ success: true, user: { _id: user._id, username } });  // eslint-disable-line no-underscore-dangle, max-len
        });
      });
    });
  },
  deleteUser(id) {
    return db.deleteUser(id);
  },
  findById(id) {
    return db.getById(id);
  },
  requestResetLink(email) {
    return db.getByUsername(email).then((userData) => {
      if (!userData) {
        return true;  // false positive
      }
      return getRandomBytes().then(hash => db.setPasswordConfirmationHash(email, hash)
        .catch(() => db.getPasswordConfirmationHash(email)
          .then((user) => {
            if (!user) {
              throw errors.UNKNOWN;
            }
            return user;
          })).then(user => user.hash));
    });
  },
  resetPassword(email, newPassword, confirmationHash) {
    return db.getPasswordConfirmationHash(email).then((user) => {
      if (!user || user.hash !== confirmationHash) {
        throw errors.INVALID_DETAILS;
      }
      return hashPassword(newPassword)
      .then(newPasswordHash => db.setUserPassword(email, newPasswordHash).catch(() => {
        throw errors.UNKNOWN;
      }));
    });
  }
};

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
