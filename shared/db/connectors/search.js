const ObjectId = require('mongodb').ObjectID;
const Checkers = require('../helpers/checkers');
const TableNames = require('../tableNames');
const Connector = require('./connector');

const returnableFields = {
  contractType: 1,
  location: 1,
  company: 1,
  title: 1,
  date: 1,
  shortDescription: 1
};

module.exports = {
  getDistricts() {
    return Connector.getCollection(TableNames.DISTRICTS)
      .find().sort({ index: 1 }).toArray();
  },
  getContractTypes() {
    return Connector.getCollection(TableNames.CONTRACT_TYPES)
      .find().sort({ index: 1 }).toArray();
  },
  getByRef(ref) {
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .findOne({ _id: ObjectId(ref) }).then(data => data);
  },
  search(query) {
    const limit = Checkers.checkLimit(query.limit);
    const page = Checkers.checkPage(query.page);

    const entries = [
      Checkers.checkLocation(query.locations),
      Checkers.checkContractType(query.contractTypes),
      Checkers.checkKeywords(query.keywords),
      Checkers.checkDate(query.age)
    ];
    const merged = entries.filter(entry => !!entry);
    const filters = merged.length <= 0 ? {} : {
      $and: merged
    };
    // return Connector.connect().then((db) => {
    const find = Connector.getCollection(TableNames.OPPORTUNITIES)
      .find(filters, returnableFields).sort({ date: -1 });

    return find.count()
      .then(count => find.skip(page * limit).limit(limit)
      .toArray().then(data => ({ data, count })));
  },
  latest() {
    return Connector.getCollection(TableNames.OPPORTUNITIES)
      .find({}, returnableFields)
      .limit(30).sort({ date: -1 })
      .toArray();
  }
};
