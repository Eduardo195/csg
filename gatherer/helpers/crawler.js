const request = require('request');
const iconv = require('iconv-lite');

function crawl(encoding, uri) {
  const requestOptions  = { encoding: null, method: "GET", uri};
  return new Promise( (resolve, reject) => {
    request.get(requestOptions, function(error, response, body){
      if(error){
        reject(error);
      }
      resolve(iconv.decode(new Buffer(body), encoding));
    });
  });
}

module.exports = crawl;
