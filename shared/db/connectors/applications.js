const ObjectID = require('mongodb').ObjectID;
const Connector = require('./connector');
const TableNames = require('../tableNames');

module.exports = {
  getAll(id) {
    return Connector.getCollection(TableNames.APPLICATIONS)
      .find({ candidadeId: ObjectID(id) }, { application: 1, opportunity: 1 }).toArray();
  },
  getApplicationsByEmployerId(employerId) {
    return Connector.getCollection(TableNames.APPLICATIONS)
      .find({ 'opportunity.employerId': ObjectID(employerId) }).toArray();
  }
};
