const bcrypt = require('bcrypt-nodejs');
const db = require('../../shared/db/authConnector');
const validateCredentials = require('./validateCredentials');

module.exports = {
  register(username, password) {
    return new Promise((resolve, reject) => { // eslint-disable-line consistent-return
      if (!validateCredentials(username, password)) {
        return reject(`Invalid details '${username}' '${password}'`);
      }
      db.getByUsername(username).then((user) => {
        if (user) {
          // TODO: Send to email confirmation page to prevent attaks?
          reject(`User '${username}' already exists`);
        } else {
          bcrypt.hash(password, null, null, (err, hash) => {
            if (err) {
              reject(err);
            } else {
              db.register(username, hash)
                .then(userData => resolve(userData))
                .catch(e => reject(new Error(e)));
            }
          });
        }
      });
    });
  },
  login(username, pwd) {
    return new Promise((resolve, reject) => {
      db.getByUsername(username).then((user) => {
        if (!user) {
          reject(`username '${username}' not found`);
        } else {
          bcrypt.compare(pwd, user.password, (err, res) => {
            if (res) {
              console.log('Login success');
              resolve(user);
            } else {
              reject('password missmatch');
            }
          });
        }
      });
    });
  },
  findById(id) {
    return db.getById(id);
  }
};
