const AccountConnector = require('./account');
const TableNames = require('../tableNames');
const Connector = require('./connector');

module.exports = Object.assign(AccountConnector(Connector, TableNames.LOCAL_USERS, TableNames.LOCAL_USERS_UNV),
  {
    register(username, password, confHash) {
      return Connector.getCollection(TableNames.LOCAL_USERS_UNV)
        .insert({ username: username.toLowerCase(), password, confHash })
        .then((WriteResult) => {
          if (WriteResult.writeConcernError) {
            throw new Error(`fAILED TO REGISTER UNCONFIRMED ${username}: ${WriteResult.writeConcernError.errmsg}`);
          }
          // conf hash needed for email cong
          return { username, confHash };
        });
    }
  }
);
