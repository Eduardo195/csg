const ObjectID = require('mongodb').ObjectID;
const TableNames = require('./tableNames');
const Connector = require('./connector');
const RegConnector = require('./regConnector');

const returnableValues = { _id: 1, username: 1 };

module.exports = {
  getById(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectID(id) }, returnableValues);
  },
  getByUsername(username) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ username: username.toLowerCase() });
  },
  register({ _id, username, password }) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .insert({ username: username.toLowerCase(), password })
      .then((WriteResult) => {
        if (WriteResult.writeConcernError) {
          console.log(`FAILED TO move ${username}: ${WriteResult.writeConcernError.errmsg}`);
          return false;
        }
        return this.removeUnconfirmedById(_id);
      });
  },
  setUserPassword(username, password) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .updateOne({ username: username.toLowerCase() }, { $set: { password } });
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
  },
  deleteUser(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .removeOne({ _id: ObjectID(id) });
  },
  setPasswordConfirmationHash(username, hash) {
    return Connector.getCollection(TableNames.PASSWORD_RESET)
      .insertOne({ username, hash })
      .then(() => ({ hash }));  // Explicitly return user data
  },
  getPasswordConfirmationHash(username) {
    return Connector.getCollection(TableNames.PASSWORD_RESET)
    .findOne({ username });
  }
};
