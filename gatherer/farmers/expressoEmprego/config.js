const scraper = require('./scraper');

module.exports = {
  encoding: 'UTF-8',
  src: 'expressoEmprego',
  maxRequests: 5, // 5 allows for ~20 pages total at 1/sec
  getUrl(index) {
    return `http://expressoemprego.pt/ofertas-emprego?page=${index}`;
  },
  scraper
};
