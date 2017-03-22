const ObjectID = require('mongodb').ObjectID;
const Connector = require('./connector');
const TableNames = require('../tableNames');
const errors = require('./errors');

const returnableValues = { _id: 1, username: 1 };
const WHITELISTED_FIELDS = {
  [TableNames.LOCAL_USERS]: ['username', 'email', 'type', 'password', 'nif'],
  [TableNames.LOCAL_USERS_UNVERIFIED]: ['username', 'email', 'type', 'password', 'nif', 'confHash']
};

function whitelist(obj, keys) {
  const newObj = {};
  const objKeys = Object.keys(obj);
  objKeys.forEach((key) => {
    if (keys.indexOf(key) >= 0) {
      newObj[key] = typeof obj[key] === 'string' ? obj[key].toLowerCase() : obj[key];
    }
  });
  return newObj;
}

module.exports = {
  getById(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectID(id) }, returnableValues);
  },
  getByUsername(username) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ username: username.toLowerCase() });
  },
  register(user) {
    const whitelisted = whitelist(user, WHITELISTED_FIELDS[TableNames.LOCAL_USERS_UNVERIFIED]);
    console.log('INSERING whitelisted user', whitelisted);
    return Connector.getCollection(TableNames.LOCAL_USERS_UNVERIFIED).insert(whitelisted).then((WriteResult) => {
      if (WriteResult.writeConcernError) {
        console.log(`fAILED TO REGISTER  ${user.username}: ${WriteResult.writeConcernError.errmsg}`);
        throw errors.UNV_REGISTRATION_FAILED;
      }
    });
  },
  verifyAccount(user) {
    console.log('user dump', user);
    const whitelisted = whitelist(user, WHITELISTED_FIELDS[TableNames.LOCAL_USERS]);
    console.log('veryfied whitelisted user', whitelisted);
    return Connector.getCollection(TableNames.LOCAL_USERS).insert(whitelisted).catch((err) => {
      console.log(err);
      throw errors.FAILED_CONFIRM_ACCOUNT;
    }).then((WriteResult) => {
      if (WriteResult.writeConcernError) {
        console.log(`FAILED TO move ${user.username}: ${WriteResult.writeConcernError.errmsg}`);
        throw errors.FAILED_CONFIRM_ACCOUNT;
      }
    });
  },
  setUserPassword(username, password) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .updateOne({ username: username.toLowerCase() }, { $set: { password } });
  },
  removeUnconfirmedById(_id) {
    return Connector.getCollection(TableNames.LOCAL_USERS_UNVERIFIED).remove({ _id }, { justOne: true });
  },
  verifyRegistrationHash(confHash) {
    return Connector.getCollection(TableNames.LOCAL_USERS_UNVERIFIED)
      .findOne({ confHash }).then((record) => {
        if (!record) {
          throw errors.VERIFICATION_HASH_NOT_FOUND;
        }
        return record;
      });
  },
  getUnverifiedByUsername(username) {
    return Connector.getCollection(TableNames.LOCAL_USERS_UNVERIFIED)
      .findOne({ username: username.toLowerCase() });
  },
  deleteUser(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS).removeOne({ _id: ObjectID(id) });
  },
  setPasswordConfirmationHash(username, hash) {
    return Connector.getCollection(TableNames.PASSWORD_RESET).insertOne({ username, hash })
      .then(() => ({ hash }));  // Explicitly return user data
  },
  getPasswordConfirmationHash(username) {
    return Connector.getCollection(TableNames.PASSWORD_RESET).findOne({ username });
  }
};
