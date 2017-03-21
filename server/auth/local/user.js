const bcrypt = require('bcrypt-nodejs');
const UserConnector = require('../../../shared/db/connectors/user');
const { hashPassword, getRandomBytes } = require('./helpers');
const validateCredentials = require('./validateCredentials');
const errors = require('./errors');

module.exports = {
  verifyAccount(hash) {
    return UserConnector.verifyRegistrationHash(hash)
      .then(user => user ? UserConnector.confirmAccount(user) : null);  // eslint-disable-line no-confusing-arrow
  },
  registerUnconfirmed(username, password) {
    return validateCredentials(username, password)
    .then(() => UserConnector.getByUsername(username)
      .then((user) => {
        if (user) {
          throw errors.USER_ALEADY_EXISTS;
        }
        return UserConnector.getUnregisterdUserByUsername(username).then((unregUser) => {
          if (unregUser) {
            throw errors.USER_ALEADY_EXISTS;
          }
          return hashPassword(password)
            .then(passHash => getRandomBytes()
              .then(confirmationHash => UserConnector.registerUnconfirmed(username, passHash, confirmationHash)
              .then(() => confirmationHash)
            )
          );
        });
      })
    );
  },
  login(username, password) {
    return UserConnector.getByUsername(username).then((user) => {
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
    return UserConnector.deleteUser(id);
  },
  findById(id) {
    return UserConnector.getById(id);
  },
  requestResetLink(email) {
    return UserConnector.getByUsername(email).then((userData) => {
      if (!userData) {
        return true;  // false positive
      }
      return getRandomBytes().then(hash => UserConnector.setPasswordConfirmationHash(email, hash)
        .catch(() => UserConnector.getPasswordConfirmationHash(email)
          .then((user) => {
            if (!user) {
              throw errors.UNKNOWN;
            }
            return user;
          })).then(user => user.hash));
    });
  },
  resetPassword(email, newPassword, confirmationHash) {
    return UserConnector.getPasswordConfirmationHash(email).then((user) => {
      if (!user || user.hash !== confirmationHash) {
        throw errors.INVALID_DETAILS;
      }
      return hashPassword(newPassword)
      .then(newPasswordHash => UserConnector.setUserPassword(email, newPasswordHash).catch(() => {
        throw errors.UNKNOWN;
      }));
    });
  }
};
