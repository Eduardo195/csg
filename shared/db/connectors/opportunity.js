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
  updateOne(employerId, opportunityId, opportunity) {
    console.log('updateOne opportunity ::: ', opportunityId, opportunity);
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .updateOne({
        _id: ObjectID(opportunityId),
        employerId: ObjectID(employerId)
      }, { $set: opportunity });
  },
  getOne(employerId, opportunityId) {
    console.log('employerId :::', employerId);
    console.log('opportunityId :::', opportunityId);
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .findOne({
        _id: ObjectID(opportunityId),
        employerId: ObjectID(employerId)
      });
  },
  getAll(id) {
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .find({ employerId: ObjectID(id) }).toArray();
  }
};
