const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');
const Checkers = require('./helpers/checkers');
const TableNames = require('./tableNames');
const Connector = require('./connector');

const returnableValues = { _id: 1, username: 1, };

module.exports = {
  getById(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectId(id) }, returnableValues);
  },
  getByUsername(username) {
    return Connector.getCollection(TableNames.LOCAL_USERS).findOne({ username })
  },
  register(username, password) {
      return new Promise((resolve, reject) => {
        const col = Connector.getCollection(TableNames.LOCAL_USERS);
        col.findOne({ username }, { 'username': 1}).then(existingUserData => {
            if(existingUserData) {
              return reject(new Error(`fAILED TO REGISTER: ${username} already exists`));
            }
            const user = { username, password };
            return col.insert(user).then(WriteResult => {
              if(WriteResult.writeConcernError){
                reject(new Error(`fAILED TO REGISTER: ${WriteResult.writeConcernError.errmsg}`));
              }else {
                resolve(user);// TODO: send back the user obj without hash
              }
            })
          })
      })
  }
};
