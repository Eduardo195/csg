const MongoClient = require('mongodb').MongoClient;

const URL = 'mongodb://127.0.0.1:27017/labop';

function connect() {
  return MongoClient.connect(URL);
}

class Connector {
  constructor() {
    this.con = this.connect();
  }
  connect() {
    if (this.con) {
      return this.con;
    }
    return connect().then((db) => {
      this.db = db;
    });
  }
  find(collectionName, query) {
    return this.getCollection(collectionName).find(query).toArray();
  }
  findOne(collectionName, query) {
    return this.getCollection(collectionName).findOne(query).toArray();
  }
  createCollection(name, options) {
    return this.db.createCollection(name, options);
  }
  createIndex(col, params, options) {
    return col.createIndex(params, options);
  }
  dropCollection(name) {
    return this.db.collection(name).drop();
  }
  getCollection(name) {
    return this.db.collection(name);
  }
  insert(collectionName, entry) {
    return this.getCollection(collectionName).insert(entry);
  }
  insertMany(col, data) {
    return col.insertMany(data, { ordered: false }).catch(err => console.log('InsertMany failed: ', err));
  }
  close() {
    this.db.close();
    this.db = null;
    this.con = null;
  }
}


module.exports = new Connector(URL);
