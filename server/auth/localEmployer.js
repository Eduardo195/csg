const db = require('../../shared/db/authConnectorEmployer');
const errors = require('./errors');
const getCompanyContact = require('../services/nif');
const validateCredentials = require('./validateCredentialsEmployer');
const { hashPassword, getRandomBytes } = require('./helpers');
const mailer = require('../mailer/mailer');

module.exports = {
  registerCompany(username, password, nif) {
    return validateCredentials(username, password, nif).then(() => {
      db.getByUsername(username).then((company) => {
        if (company) {
          throw errors.COMPANY_ALREADY_EXISTS;
        }
        return db.getUnverifiedByUsername(username).then((unVCom) => {
          if (unVCom) {
            throw errors.UNV_COMPANY_ALREADY_EXISTS;
          }
          return getCompanyContact(nif).then((email) => {
            return hashPassword(password).then((passHash) => {
              return getRandomBytes().then((confHash) => {
                  // TODO: sanitize email
                return db.registerUnverified(username, email, passHash, nif, confHash).then(() => {
                  return mailer.sendConfirmationEmail(email, confHash).then(() => email);
                });  // registerUnverified
              });  // getRandomBytes
            });  // hashPassword
          });  // getCompanyContact
        }); // getUnverifiedByUsername
      });  // getByUsername
    }); // validateCredentials
  }
};
