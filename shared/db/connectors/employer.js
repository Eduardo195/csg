const errors = require('../errors');
const Connector = require('./connector');
const TableNames = require('../tableNames');
const AccountConnector = require('./account');

module.exports = Object.assign(
  AccountConnector(Connector, TableNames.LOCAL_EMPLOYERS, TableNames.LOCAL_EMPLOYERS_UNV),
  {
    register(username, email, password, nif, confHash) {
      return Connector.getCollection(TableNames.LOCAL_EMPLOYERS_UNV)
        .insert({ username: username.toLowerCase(), email: email.toLowerCase(), password, confHash, nif })
        .then((WriteResult) => {
          if (WriteResult.writeConcernError) {
            console.log(`fAILED TO REGISTER  ${username}: ${WriteResult.writeConcernError.errmsg}`);
            throw errors.UNV_REGISTRATION_FAILED;
          }
        });
    }
  }
);
