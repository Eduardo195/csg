const AccountAuth = require('./account');
const Connector = require('../../../shared/db/connectors/user');
const validateCredentials = require('./validateCredentials');
const { hashPassword, getRandomBytes } = require('./helpers');
const errors = require('./errors');

module.exports = Object.assign(AccountAuth(Connector),
  {
    register(username, password) {
      return validateCredentials(username, password)
      .then(() => Connector.getByUsername(username).then((user) => {
        if (user) {
          throw errors.USER_ALEADY_EXISTS;
        }
        return Connector.getUnverifiedByUsername(username).then((unregUser) => {
          if (unregUser) {
            throw errors.USER_ALEADY_EXISTS;
          }
          return hashPassword(password)
              .then(passHash => getRandomBytes()
                .then(confirmationHash => Connector.register(username, passHash, confirmationHash)
                .then(() => confirmationHash)
              )
            );
        });
      })
      );
    }
  }
);
