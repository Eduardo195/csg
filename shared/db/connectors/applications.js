const ObjectID = require('mongodb').ObjectID;
const Connector = require('./connector');
const TableNames = require('../tableNames');

module.exports = {
  getAll(id) {
    return Connector.getCollection(TableNames.APPLICATIONS)
      .find({ candidadeId: ObjectID(id) }).toArray();
  }
};
