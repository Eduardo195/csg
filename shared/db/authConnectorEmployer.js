const TableNames = require('./tableNames');
const errors = require('./errors');
const Connector = require('./connector');

module.exports = {
  getByUsername(username) {
    return Connector.getCollection(TableNames.LOCAL_EMPLOYERS)
      .findOne({ username: username.toLowerCase() });
  },
  getUnverifiedByUsername(username) {
    return Connector.getCollection(TableNames.LOCAL_EMPLOYERS_UNV)
      .findOne({ username: username.toLowerCase() });
  },
  register(username, email, password, nif, confHash) {
    return Connector.getCollection(TableNames.LOCAL_EMPLOYERS_UNV)
      .insert({
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password,
        confHash,
        nif
      }).then((WriteResult) => {
        if (WriteResult.writeConcernError) {
          console.log(`fAILED TO REGISTER  ${username}: ${WriteResult.writeConcernError.errmsg}`);
          throw errors.UNV_REGISTRATION_FAILED;
        }
      });
  }
};
