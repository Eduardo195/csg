const bcrypt = require('bcrypt-nodejs');
const db = require('../../shared/db/authConnector');
const validateCredentials = require('./validateCredentials');
const authErrorCodes = require('./errorCodes');
const { randomBytes } = require('crypto');

const HASH_BYTES = 256;

module.exports = {
  checkHash(hash) {
    return db.confirmHash(hash)
      .then(user => user ? db.register(user) : null);  // eslint-disable-line no-confusing-arrow
  },
  // TODO: needs a refactor
  registerUnconfirmed(username, password) {
    return new Promise((resolve, reject) => { // eslint-disable-line consistent-return
      if (!validateCredentials(username, password)) {
        return reject(`Invalid details '${username}' '${password}'`);
      }
      db.getByUsername(username).then((user) => {
        if (user) {
          reject({ code: authErrorCodes.USER_ALEADY_EXISTS, msg: `User '${username}' already exists` });
        } else {
          db.getUnregisterdUserByUsername(username).then((unregUser) => {
            if (unregUser) {
              reject({ code: authErrorCodes.UNREG_USER_ALEADY_EXISTS, msg: `User '${username}' already exists but is unregistered` });
            } else {
              bcrypt.hash(password, null, null, (error, passHash) => {
                if (error) {
                  reject({ code: authErrorCodes.CRYPT_ERROR, msg: error });
                } else {
                  randomBytes(HASH_BYTES, (err, buf) => {
                    if (err) {
                      reject(err);
                    } else {
                      db.registerUnconfirmed(username, passHash, buf.toString('hex'))
                        .then(userData => resolve(userData))
                        .catch(e => reject({ code: authErrorCodes.UNKNOWN, msg: e }));
                    }
                  });
                }
              });
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
