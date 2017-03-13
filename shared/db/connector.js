const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/opLap';

class Connector {
  constructor() {
     this.con = MongoClient.connect(URL).then(db => {
      this.db = db;
    });
  }
  createCollection(name, options) {
    return this.db.createCollection(name, options);
  }
  getCollection(name) {
    return this.db.collection(name);
  }
  createIndex(col, params, options) {
    return col.createIndex(params,options);
  }
  dropCollection(name) {
    return this.db.collection(name).drop()
  }
  insertMany(col, data) {
    return col.insertMany(data, { ordered: false }).catch(err => {
      return console.log('InsertMany failed: ', err);
    });
  }
  close(){
    this.db.close();
  }
}

module.exports = new Connector();
