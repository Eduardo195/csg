const AccountManager = require('./account');
const AccountConnector = require('../../../shared/db/connectors/account');
const validateCredentials = require('./validateCredentials');
const { hashPassword, getRandomBytes } = require('./helpers');
const errors = require('./errors');

module.exports = Object.assign(AccountManager(),
  {
    register(username, password) {
      return validateCredentials(username, password)
      .then(() => AccountConnector.getByUsername(username).then((user) => {
        if (user) {
          throw errors.USER_ALEADY_EXISTS;
        }
        return AccountConnector.getUnverifiedByUsername(username).then((unregUser) => {
          if (unregUser) {
            throw errors.USER_ALEADY_EXISTS;
          }
          return hashPassword(password)
              .then(passHash => getRandomBytes()
                .then(confHash => AccountConnector.register({ username, type: 'user', password: passHash, confHash })
                .then(() => confHash)
              )
            );
        });
      })
      );
    }
  }
);
