const ObjectID = require('mongodb').ObjectID;
const Connector = require('./connector');
const TableNames = require('../tableNames');

module.exports = {
  getCandidateProfile(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .find({ _id: ObjectID(id) }).toArray();
  },
  setPersonal(id, name, surname) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .updateOne({ _id: ObjectID(id) }, {
        $set: { name, surname }
      });
  },
  setProfessional(id, yearsXp, keywords) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .updateOne({ _id: ObjectID(id) }, {
        $set: { yearsXp, keywords }
      });
  }
};
