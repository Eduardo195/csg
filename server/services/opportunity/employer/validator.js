/* eslint no-use-before-define: 0, no-plusplus: 0 */
const errors = require('./errors');
const locations = require('../../../../shared/data/districts');
const contractTypes = require('../../../../shared/data/contractTypes');

const MAX_TITLE_LENGTH = 128;
const requiredFields = ['title', 'body'];

const validators = {
  title: titleValidator,
  body: bodyValidator,
  markdown: markdownValidator,
  location: locationValidator,
  contractType: contractTypeValidator,
  pay: payValidator
};

function bodyValidator(body) {
  return body;
}

function titleValidator(title) {
  if (!title || title.length <= 0 || title.length > MAX_TITLE_LENGTH) {
    throw errors.INVALID_TITLE;
  }
  return title;
}

function markdownValidator(md) {
  if (!md || md.length <= 0) {
    throw errors.INVALID_MARKDOWN;
  }
  return md;
}

function findInMap(needle, haystack) {
  return haystack.find(({ index }) => index === needle);
}

function locationValidator(locIndex) {
  const location = findInMap(+locIndex, locations);
  if (!location) {
    throw errors.INVALID_LOCATION;
  }
  return location;
}

function contractTypeValidator(ctIndex) {
  const contractType = findInMap(+ctIndex, contractTypes);
  if (!contractType) {
    throw errors.INVALID_CONTRACT_TYPE;
  }
  return contractType;
}

function payValidator(pay) {
  let { min, max } = pay;
  min = +min;
  max = +max;

  if (isNaN(min) && isNaN(max)) {
    throw errors.INVALID_PAY;
  } else if (!isNaN(min) && !isNaN(max)) {
    // smartypants
    if (min > max) {
      const tempMin = min;
      min = max;
      max = tempMin;
    }
    return { min, max };
  } else if (!isNaN(min)) {
    return { min };
  } else if (!isNaN(max)) {
    return { max };
  } else {
    console.log('unforseen pay combination');
    throw errors.INVALID_PAY;
  }
}

function hasRequiredFields(op) {
  for (let i = 0; i < requiredFields.length; i++) {
    if (!op[requiredFields[i]]) {
      return false;
    }
  }
  return true;
}

function sanitize(op) {
  // ensure it has all required fields
  if (!hasRequiredFields(op)) {
    throw errors.INVALID_PARAMS;
  }

  return Object.keys(op).reduce((acc, key) => {
    if (validators[key]) {
      acc[key] = validators[key](op[key]); // eslint-disable-line no-param-reassign
    } else {
      console.log(`IGNORING KEY ${key}`);
    }
    return acc;
  }, {});
}

module.exports = {
  validate(op) {
    return new Promise((resolve, reject) => {
      if (!op || typeof op !== 'object') {
        reject(errors.INVALID_PARAMS);
      } else {
        try {
          resolve(sanitize(op));
        } catch (e) {
          reject(e);
        }
      }
    });
  }
};
