const ObjectID = require('mongodb').ObjectID;
const Connector = require('./connector');
const TableNames = require('../tableNames');

const returnableCandidateValues = { _id: 1, username: 1 };

module.exports = {
  getCandidate(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectID(id), type: 'candidate' }, returnableCandidateValues);
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
