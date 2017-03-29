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
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .updateOne({
        _id: ObjectID(opportunityId),
        employerId: ObjectID(employerId)
      }, { $set: opportunity });
  },
  getOne(employerId, opportunityId) {
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .findOne({
        _id: ObjectID(opportunityId),
        employerId: ObjectID(employerId)
      });
  },
  getOneForApplication(id) {
    return Connector.getCollection(TableNames.OPPORTUNITIES).findOne({ _id: ObjectID(id) }, {
      title: 1,
      employerName: 1,
      'location.label': 1,
      'contractType.label': 1
    });
  },
  getAll(id) {
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .find({ employerId: ObjectID(id) }).toArray();
  }
};
