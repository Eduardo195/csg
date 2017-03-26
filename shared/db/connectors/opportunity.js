const ObjectID = require('mongodb').ObjectID;
const Connector = require('./connector');
const TableNames = require('../tableNames');
// const errors = require('./errors');

const returnableFields = { type: 1, companyName: 1, _id: 1, nif: 1 };

module.exports = {
  getEmployerDetailsById(id) {
    return Connector.getCollection(TableNames.LOCAL_USERS)
      .findOne({ _id: ObjectID(id), type: 'employer' }, returnableFields);
  },
  insert(opportunity) {
    console.log('inserting ', opportunity);
    return Connector.insert(TableNames.OPPORTUNITIES, opportunity);
  },
  delete(employerId, opportunityId) {
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .remove({
        _id: ObjectID(opportunityId),
        employerId
      }, { justOne: true });
  },
  getAll(id) {
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .find({ employerId: ObjectID(id) }).toArray();
  }
};
