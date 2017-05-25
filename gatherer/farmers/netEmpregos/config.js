const scraper = require('./scraper');

module.exports = {
  encoding: 'ISO-8859-1',
  src: 'netEmpregos',
  maxRequests: 5, // 5 allows for ~20 pages total at 1/sec
  getUrl(index) {
    return `http://www.net-empregos.com/listagem_livre2.asp?page=${index}`;
  },
  scraper
};
