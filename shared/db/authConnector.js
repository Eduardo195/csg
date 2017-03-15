const ObjectId = require('mongodb').ObjectID;
const TableNames = require('./tableNames');
const Connector = require('./connector');
const RegConnector = require('./regConnector');

const returnableValues = { _id: 1, username: 1 };

module.exports = {
  getById(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectId(id) }, returnableValues);
  },
  getByUsername(username) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ username: username.toLowerCase() });
  },
  register({ _id, username, password }) {
    console.log('inserting ', username);
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .insert({ username: username.toLowerCase(), password })
      .then((WriteResult) => {
        if (WriteResult.writeConcernError) {
          console.log(`FAILED TO move ${username}: ${WriteResult.writeConcernError.errmsg}`);
          return false;
        }
        console.log(`User ${username} moved`);
        console.log('removing original');
        return this.removeUnconfirmedById(_id);
      });
  },
  removeUnconfirmedById(_id) {
    return RegConnector.getCollection(TableNames.UNVERIFIED).remove({ _id }, { justOne: true });
  },
  confirmHash(confHash) {
    return RegConnector.getCollection(TableNames.UNVERIFIED)
      .findOne({ confHash }, { username: 1, password: 1 });
  },
  getUnregisterdUserByUsername(username) {
    return RegConnector.getCollection(TableNames.UNVERIFIED)
      .findOne({ username: username.toLowerCase() });
  },
  registerUnconfirmed(username, password, confHash) {
    return RegConnector.getCollection(TableNames.UNVERIFIED)
      .insert({ username: username.toLowerCase(), password, confHash })
      .then((WriteResult) => {
        if (WriteResult.writeConcernError) {
          throw new Error(`fAILED TO REGISTER UNCONFIRMED ${username}: ${WriteResult.writeConcernError.errmsg}`);
        }
        // conf hash needed for email cong
        return { username, confHash };
      });
  }
};
