const bcrypt = require('bcrypt-nodejs');
const db = require('../../shared/db/authConnector');

module.exports = {
  register(username, password){
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, null, null, (err, hash) => {
        if(err){ return reject(err); }
        db.register(username, hash)
          .then(user => resolve(user))
          .catch(err => reject(new Error(err)));
      });
    })
  },
  login (username, pwd) {
    return new Promise((resolve, reject) => {
      db.getByUsername(username).then(user => {
        console.log('user ::: ', user);
        if(!user ){
          return reject(`username '${username}' not found`);
        }
        bcrypt.compare(pwd, user.password, (err, res) => {
          if(res) {
            console.log(`Login success`);
            resolve(user);
          } else {
            reject('password missmatch');
          }
        });
      });
    });
  },
  findById(id) {
     return db.getById(id);
  }
}
