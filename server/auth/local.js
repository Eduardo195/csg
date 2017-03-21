/* eslint no-use-before-define: 0 */
const bcrypt = require('bcrypt-nodejs');
const db = require('../../shared/db/authConnector');
const { hashPassword, getRandomBytes } = require('./helpers');
const validateCredentials = require('./validateCredentials');
const errors = require('./errors');

module.exports = {
  checkHash(hash) {
    return db.confirmHash(hash)
      .then(user => user ? db.register(user) : null);  // eslint-disable-line no-confusing-arrow
  },
  registerUnconfirmed(username, password) {
    return validateCredentials(username, password)
    .then(() => db.getByUsername(username)
      .then((user) => {
        if (user) {
          throw errors.USER_ALEADY_EXISTS;
        }
        return db.getUnregisterdUserByUsername(username).then((unregUser) => {
          if (unregUser) {
            throw errors.USER_ALEADY_EXISTS;
          }
          return hashPassword(password)
            .then(passHash => getRandomBytes()
              .then(confirmationHash => db.registerUnconfirmed(username, passHash, confirmationHash)
              .then(() => confirmationHash)
            )
          );
        });
      })
    );
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
