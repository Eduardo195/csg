const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');
const Checkers = require('./helpers/checkers');

const TABLE_NAME = 'opportunities';
const TABLE_DISTRICTS = 'districts';
const TABLE_CONTRACT_TYPES = 'contractTypes';
const URL = 'mongodb://localhost:27017/opLap';

const returnableFields = {
  contractType: 1,
  location: 1,
  company: 1,
  title: 1,
  date: 1,
  shortDescription: 1,
};

const searchableFields = {
  contractType: 'contractType',
  location: 'location',
};

const Connector = {
  connect() {
    return MongoClient.connect(URL);
  },

  getDistricts() {
    return this.connect().then(db => db.collection(TABLE_DISTRICTS).find().sort({ index: 1 }).toArray().then((data) => {
      db.close();
      return data;
    }));
  },
  getContractTypes() {
    return this.connect().then(db => db.collection(TABLE_CONTRACT_TYPES).find().sort({ index: 1 }).toArray().then((data) => {
      db.close();
      return data;
    }));
  },
  getByRef(ref) {
    return this.connect().then(db => db.collection(TABLE_NAME).find({ _id: ObjectId(ref) }).toArray().then((data) => {
      db.close();
      return data[0];
    }));
  },
  getUnique(field) {
    return new Promise((resolve) => {
      field = searchableFields[field];
      this.connect().then((db) => {
        db.collection(TABLE_NAME).distinct(field).then((data) => {
          db.close();
          return resolve(data);
        }).catch((error) => {
          db.close();
          console.error(`error getUnique(${field})`, error);
          resolve([]);
        });
      });
    });
  },
  search(query) {
    const limit = Checkers.checkLimit(query.limit);
    const page = Checkers.checkPage(query.page);
    const date = Checkers.checkDate(query.age);

    const entries = [
      Checkers.checkLocation(query.locations),
      Checkers.checkContractType(query.contractTypes),
      Checkers.checkKeywords(query.keywords),
      Checkers.checkDate(query.age),
    ];

    // entries.map(v => console.log(v));

    const merged = entries.filter(entry => !!entry);
    const filters = merged.length <= 0 ? {} : {
      $and: merged,
    };

    return this.connect().then((db) => {
      const find = db.collection(TABLE_NAME).find(filters, returnableFields).sort({ date: -1 });
      return find.count().then(count => find.skip(page * limit).limit(limit).toArray().then((data) => {
        db.close();
        return { data, count };
      }));
    });
  },
  latest() {
    return this.connect().then((db) => {
      return db.collection(TABLE_NAME).find({}, returnableFields)
        .limit(30).sort({ date: -1 }).toArray().then((data) => {
          db.close();
          return data;
        })
    });
  },
};

module.exports = Connector;
