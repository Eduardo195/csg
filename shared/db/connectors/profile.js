const ObjectID = require('mongodb').ObjectID;
const Connector = require('./connector');
const TableNames = require('../tableNames');

module.exports = {
  getCandidateProfile(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .find({ _id: ObjectID(id) }).toArray();
  }
};
