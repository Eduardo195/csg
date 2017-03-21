const TableNames = require('./tableNames');
const errors = require('./errors');
const Connector = require('./connector');
const UnvConnector = require('./unvConnector');

module.exports = {
  getByUsername(username) {
    return Connector.getCollection(TableNames.LOCAL_EMPLOYERS)
      .findOne({ username: username.toLowerCase() });
  },
  getUnverifiedByUsername(username) {
    return UnvConnector.getCollection(TableNames.LOCAL_EMPLOYERS)
      .findOne({ username: username.toLowerCase() });
  },
  registerUnverified(username, email, password, nif, confHash) {
    return UnvConnector.getCollection(TableNames.LOCAL_EMPLOYERS)
      .insert({
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password,
        confHash,
        nif
      }).then((WriteResult) => {
        if (WriteResult.writeConcernError) {
          console.log(`fAILED TO REGISTER UNVERIFIED ${username}: ${WriteResult.writeConcernError.errmsg}`);
          throw errors.UNV_REGISTRATION_FAILED;
        }
      });
  }
};
