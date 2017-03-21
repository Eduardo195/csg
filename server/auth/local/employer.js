const EmployerConnector = require('../../../shared/db/connectors/employer');
const errors = require('./errors');
const getCompanyContact = require('../../services/nif/nif');
const CaptchaService = require('../../services/captcha/captcha');
const validateCredentials = require('./validateCredentialsEmployer');
const { hashPassword, getRandomBytes } = require('./helpers');
const mailer = require('../../services/mailer/mailer');
const AccountAuth = require('./account');

module.exports = Object.assign(AccountAuth(EmployerConnector),
  {
    register(captcha, username, password, nif) {
      return CaptchaService.verify(captcha).then(() => {
        return validateCredentials(username, password, nif).then(() => {
          return EmployerConnector.getByUsername(username).then((company) => {
            if (company) {
              throw errors.COMPANY_ALREADY_EXISTS;
            }
            return EmployerConnector.getUnverifiedByUsername(username).then((unVCom) => {
              if (unVCom) {
                throw errors.UNV_COMPANY_ALREADY_EXISTS;
              }
              return getCompanyContact(nif).then((email) => {
                return hashPassword(password).then((passHash) => {
                  return getRandomBytes().then((confHash) => {
                      // TODO: sanitize email
                    return EmployerConnector.register(username, email, passHash, nif, confHash).then(() => {
                      return mailer.sendConfirmationEmail(email, confHash).then(() => email);
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
