const scraper = require('./scraper');

module.exports = {
  encoding: 'UTF-8',
  src: 'expressoEmprego',
  maxRequests: 5,
  getUrl(index) {
    return `http://expressoemprego.pt/ofertas-emprego?page=${index}`;
  },
  scraper
};
