const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');
const Checkers = require('./helpers/checkers');

const URL = 'mongodb://localhost:27017/auth';
const LOCAL_USERS = 'LOCAL_USERS';
const returnableValues = {
  _id: 1,
  username: 1,
}

module.exports = {
  connect() {
    return MongoClient.connect(URL);
  },
  getById(id) {
    return this.connect().then((db) => {
      return db.collection(LOCAL_USERS)
      .findOne({ _id: ObjectId(id) }, returnableValues).then(user =>{
        console.log(`FOUND ${user} from ${id}`);
        db.close()
        return user;
      })
    })
  },
  wipe() {
    return this.connect().then((db) => {
      db.dropCollection(LOCAL_USERS).then(() => {
        db.createCollection(LOCAL_USERS).then((col) => {
          col.createIndex({ username :1 }, {unique:true}).then(() =>{
            console.log('done.');
            db.close();
          });
        });
      })
    })
  },
  getByUsername(username) {
    return this.connect().then((db) => {
      return db.collection(LOCAL_USERS)
      .findOne({ username }).then(user =>{
        console.log(`FOUND ${user} from ${username}`);
        db.close()
        return user;
      })
    })
  },
  register(username, password) {
    return this.connect().then((db) => {
      const col = db.collection(LOCAL_USERS);
      return col.findOne({ username }, { 'username': 1}).then(data => {
        return new Promise((resolve, reject) => {
          if(data) {
            db.close();
            reject(new Error(`fAILED TO REGISTER: ${username} already exists`));
          } else {
            const user = { username, password };
            col.insert(user).then(WriteResult => {
              if(WriteResult.writeConcernError){
                db.close();
                reject(new Error(`fAILED TO REGISTER: ${WriteResult.writeConcernError.errmsg}`));
              }else {
                db.close();
                // TODO: send back the user obj without hash
                resolve(user);
              }
            }).catch(err => {
              console.log('THIS SHOULD NEVER HAPPEND');
            });
          }
        })
      });
      return findOne;
    })
  },

  getDistricts() {
    return this.connect().then(db => db.collection(TABLE_DISTRICTS).find().sort({ index: 1 }).toArray().then((data) => {
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
};

;

//
//
// function register(username, password) {
//   // var deferred = Q.defer();
//
//   return MongoClient.connect(mongodbUrl).then(db) => {
//     var collection = db.collection('localUsers');
//
//     //check if username is already assigned in our database
//     collection.findOne({'username' : username})
//       .then(function (result) {
//         if (null != result) {
//           console.log("USERNAME ALREADY EXISTS:", result.username);
//           deferred.resolve(false); // username exists
//         }
//         else  {
//           var hash = bcrypt.hashSync(password, 8);
//           var user = {
//             "username": username,
//             "password": hash,
//             "avatar": "http://placepuppy.it/images/homepage/Beagle_puppy_6_weeks.JPG"
//           }
//
//           console.log("CREATING USER:", username);
//
//           collection.insert(user)
//             .then(function () {
//               db.close();
//               deferred.resolve(user);
//             });
//         }
//       });
//   });
//
//   return deferred.promise;
// };
