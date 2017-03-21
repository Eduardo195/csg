const ObjectID = require('mongodb').ObjectID;
const TableNames = require('../tableNames');

const returnableValues = { _id: 1, username: 1 };

function AccountConnector(Connector, registeredTable, unregisteredTable) {
  return {
    getById(id) {
      return Connector.getCollection(registeredTable)
        .findOne({ _id: ObjectID(id) }, returnableValues);
    },
    getByUsername(table, username) {
      return Connector.getCollection(table)
        .findOne({ username: username.toLowerCase() });
    },
    confirmAccount({ _id, username, password }) {
      return Connector.getCollection(registeredTable)
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
      return Connector.getCollection(registeredTable)
        .updateOne({ username: username.toLowerCase() }, { $set: { password } });
    },
    removeUnconfirmedById(_id) {
      return Connector.getCollection(unregisteredTable).remove({ _id }, { justOne: true });
    },
    verifyRegistrationHash(confHash) {
      return Connector.getCollection(unregisteredTable)
        .findOne({ confHash }, { username: 1, password: 1 });
    },
    getUnregisterdUserByUsername(username) {
      return Connector.getCollection(unregisteredTable)
        .findOne({ username: username.toLowerCase() });
    },
    deleteUser(id) {
      return Connector.getCollection(registeredTable).removeOne({ _id: ObjectID(id) });
    },
    setPasswordConfirmationHash(username, hash) {
      return Connector.getCollection(TableNames.PASSWORD_RESET).insertOne({ username, hash })
        .then(() => ({ hash }));  // Explicitly return user data
    },
    getPasswordConfirmationHash(username) {
      return Connector.getCollection(TableNames.PASSWORD_RESET).findOne({ username });
    }
  };
}

module.exports = AccountConnector;
