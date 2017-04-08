const ObjectID = require('mongodb').ObjectID;
const Connector = require('./connector');
const TableNames = require('../tableNames');

const returnableCandidateValues = { _id: 1, username: 1 };

module.exports = {
  getCandidate(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectID(id), type: 'candidate' }, returnableCandidateValues);
  },
  getCvMeta(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectID(id) }, {
        'cv.filename': 1,
        'cv.mimetype': 1,
        'cv.size': 1
      });
  },
  getCv(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectID(id) }, { cv: 1 });
  },
  setCv(id, cv) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .updateOne({ _id: ObjectID(id), type: 'candidate' }, { $set: { cv } });
  },
  applyForOpportunity(candidadeId, opportunityId, opportunity, application) {
    return Connector.getCollection(TableNames.APPLICATIONS).insertOne({
      candidadeId,
      opportunityId,
      opportunity,
      application
    });
  }

};
