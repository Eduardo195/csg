const bcrypt = require('bcrypt-nodejs');
const Auth = require('../db/auth');

var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

exports.register = (username, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, null, null, (err, hash) => {
      if(err){
        console.log(`error hashing ${password}`);
        return reject(err);
      }
      Auth.register(username, hash)
        .then(user => resolve(user))
        .catch(err => reject(new Error(err)));
    });
  })
}

exports.login = (username, pwd) => {
  return new Promise((resolve, reject) => {
    Auth.getByUsername(username).then(user =>{
      bcrypt.compare(pwd, user.password, (err, res) => {
        console.log(`err ::: `, err);
        console.log(`res ::: `, res);
        console.log(`user ::: `, user);
        if(res) {
          console.log(`Login success`);
          resolve(user);
        } else {
          console.log(`Login failed for ${username} with ${pwd}`);
          reject(null);
        }
      });
    });
  });
}


exports.findById = id => Auth.getById(id);

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
