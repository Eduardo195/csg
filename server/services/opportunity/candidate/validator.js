/* eslint no-use-before-define: 0, no-plusplus: 0 */
const isValid = require('mongodb').ObjectID.isValid;
const errors = require('./errors');

const validators = {
  opId: isValidId
};

function isValidId(id) {
  if (!isValid(id)) {
    throw errors.INVALID_OPPORTUNITY_ID;
  }
  return id;
}

function sanitize(application) {
  return Object.keys(application).reduce((acc, key) => {
    if (validators[key]) {
      acc[key] = validators[key](application[key]); // eslint-disable-line no-param-reassign
    } else {
      console.log(`IGNORING KEY ${key}`);
    }
    return acc;
  }, {});
}

module.exports = {
  validate(application) {
    return new Promise((resolve, reject) => {
      if (!application || typeof application !== 'object') {
        reject(errors.INVALID_PARAMS);
      } else {
        try {
          resolve(sanitize(application));
        } catch (e) {
          reject(e);
        }
      }
    });
  }
};
