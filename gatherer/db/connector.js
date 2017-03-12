const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');

const TableNames = require('../tableNames');

const DISTRICTS_DATA = require('../helpers/data/districts');
const URL = 'mongodb://localhost:27017/opLap';

const Connector = {
  connect () {
    return MongoClient.connect(URL);
  },
  getLast(col, n) {
    return col.find(undefined, {ref: 1, date: -1}).sort({ $natural: 1 }).limit(n).toArray();
  },
  createCollection(db, name, options) {
    return db.createCollection(name, options).then(col =>{
      console.log('created collection', name, 'with', options);
      return col;
    });
  },
  getCollection(db, name) {
    return db.collection(name);
  },
  createIndex(col, params, options) {
    return col.createIndex(params,options).then(success => {
      return console.log(
        success ? 'created index' : 'failed to create index',
        params,
        options
      );
    });
  },
  insertMany(col, data) {
    return col.insertMany(data, { ordered: false }).catch(err => {
      return console.log('InsertMany failed: ', err);
    });
  },
  dropCollection(db, name) {
    return db.collection(name).drop().then(() =>{
      return console.log(`Dropped collection "${name}"`);
    }).catch(err => {
      return console.log(`Drop collection failed: Collection "${name}" not found`);
    });
  }
}

module.exports = Connector;
