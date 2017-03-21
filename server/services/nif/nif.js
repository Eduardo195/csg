const request = require('request');
const errors = require('./errors');
const apiKey = require('./secret/apiKey');

const URI = `http://www.nif.pt/?json=1&key=${apiKey}&q=`;

function getCompanyContact(nif) {
  return new Promise((resolve, reject) => {
    return resolve('lamppostman@gmail.com');

    request.get(`${URI}${nif}`, (error, response, body) => {
      if (error || !body) {
        return reject(errors.NIF_SERVER_UNREACHEABLE);
      }

      const data = JSON.parse(body);

      if (!data ||
        data.result !== 'success' ||
        !data.records[nif].contacts ||
        !data.records[nif].contacts.email
      ) {
        reject(errors.CONTACT_DETAILS_NOT_FOUND);
      } else {
        resolve(data.records[nif].contacts.email);
      }
    });
  });
}

module.exports = getCompanyContact;
