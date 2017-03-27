const CaptchaService = require('../../services/captcha/captcha');
const getCompanyContact = require('../../services/nif/nif');
const mailer = require('../../services/mailer/mailer');
const validateCredentials = require('./validateCredentialsEmployer');
const { hashPassword, getRandomBytes } = require('./helpers');
const errors = require('./errors');
const AccountManager = require('./account');
const AccountConnector = require('../../../shared/db/connectors/account');

module.exports = Object.assign(AccountManager(),
  {
    register(captcha, username, password, nif) {
      return CaptchaService.verify(captcha).then(() => {
        return validateCredentials(username, password, nif).then(() => {
          return AccountConnector.getByUsername(username).then((company) => {
            if (company) {
              throw errors.COMPANY_ALREADY_EXISTS;
            }
            return AccountConnector.getUnverifiedByUsername(username).then((unVCom) => {
              if (unVCom) {
                throw errors.UNV_COMPANY_ALREADY_EXISTS;
              }
              return getCompanyContact(nif).then((email) => {
                return hashPassword(password).then((passHash) => {
                  return getRandomBytes().then((confHash) => {
                    // TODO: sanitize email
                    return AccountConnector.register({
                      username,
                      type: 'employer',
                      email: username, // TODO: user email from record when we have a solid method
                      password: passHash,
                      nif,
                      confHash }
                    ).then(() => {
                      return mailer.sendConfirmationEmail(username, confHash).then(() => username);
                    });  // registerUnverified
                  });  // getRandomBytes
                });  // hashPassword
              });  // getCompanyContact
            }); // getUnverifiedByUsername
          });  // getByUsername
        }); // validateCredentials
      }); // CaptchaService.verify
    }
  }
);
