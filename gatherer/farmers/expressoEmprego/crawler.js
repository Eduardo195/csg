const crawl = require('../../helpers/crawler');
const scraper = require('./scraper')

const BASE_URL = 'http://expressoemprego.pt';
const SEARCH_PATH = '/ofertas-emprego';
const ENCODING = 'UTF-8';
const REQUEST_LIMIT = 1;

const convertToRefArray = (previousData) => previousData.map(record => record.ref);

function ExpressoEmpregoCrawler(previousData) {
  const previousRefs = convertToRefArray(previousData);
  return new Promise( (resolve, reject) => {
    return getPage(1, [], previousRefs, [], resolve, reject);
  });
}

function getPage(index, results, previousRefs, currentRefs, resolve, reject) {
  return crawl(ENCODING, `${BASE_URL}${SEARCH_PATH}?page=${index}`).then((html) => {

    const urls = scraper.getPostUrls(html);
    const limit = urls.length;
    // check if we've already got any of the existing URLS on the page
    const hasHitExisting = !!urls.filter(url => previousRefs.indexOf(url.split('/')[1]) >= 0).length;

    Promise.all(urls.map(url => {
        const absoluteUrl = `${BASE_URL}${url}`;
        const split = url.split('/');
        const ref = split[split.length - 1];
        // skip adds we already have
        if(previousRefs.indexOf(ref) < 0 && currentRefs.indexOf(ref) < 0) {
          // handle cases where opportunities are added as we crawl
          currentRefs.push(ref);
          return crawl(ENCODING, absoluteUrl).then((postHtml) => {
            try {
              const oport = scraper.scrapePost(absoluteUrl, postHtml);
              results.push(oport);
            } catch(e) {
                console.log(`failed parsing ${absoluteUrl} :::`, e);
            }
          }).catch(error => {
            console.log(`{ERROR scraping ${url} }`, error);
          });
        }
    })).then(result => {
      if((index+1) <= REQUEST_LIMIT && !hasHitExisting) {
        return getPage(index+1, results, previousRefs, currentRefs, resolve, reject);
      } else {
        resolve(results);
      }
    });
  }).catch(error => {
    console.log('error ::: ', error);
    reject(error);
  });
}

module.exports = ExpressoEmpregoCrawler;
