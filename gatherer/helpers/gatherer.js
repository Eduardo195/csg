/* eslint no-plusplus: 0, consistent-return: 0, no-loop-func: 0 */
const crawl = require('./crawler');
/*
  Helpers
*/

let it;
let opIt;
let globalConfig;

function* opGen(urls, opportunities, done) {
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    yield crawl(globalConfig.encoding, url).then((html) => {
      opportunities.push(globalConfig.scraper.scrapePost(url, html));
      // console.log(`success gathering ${url} `);
      global.gc();
      opIt.next();
    }).catch((err) => {
      console.log(`ERROR gathering ${url}`, err);
      opIt.next();
    });
  }
  done(opportunities);
}

function getOpportunities(urls) {
  return new Promise((resolve) => {
    const opportunities = [];
    opIt = opGen(urls, opportunities, () => {
      resolve(opportunities);
    });
    opIt.next();
  });
}

function getPage(url, previousRefs) {
  return new Promise((resolve, reject) => {
    return crawl(globalConfig.encoding, url).then((html) => {
      const urls = globalConfig.scraper.getPostUrls(html, previousRefs);
      if (!urls || urls.length === 0) {
        reject({ noRecordsParsed: true });
      } else {
        return getOpportunities(urls).then((ops) => {
          resolve(ops);
        });
      }
    });
  });
}

function* main(previousRefs, insertData, done) {
  let i = 1;
  do {
    console.log(`at index ${i}`);
    yield getPage(globalConfig.getUrl(i), previousRefs).then((opportunities) => {
      insertData(opportunities).then(() => {
        opportunities = null; // eslint-disable-line no-param-reassign
        global.gc();
        it.next();
      }).catch((err) => {
        console.log('insertData error', err);
      });
    }).catch((err) => {
      if (err && err.noRecordsParsed) {
        // leave early if no new opportunities found
        i = globalConfig.maxRequests;
        console.log('No new op found, quitting early');
      } else {
        console.log('error', err);
      }
      it.next();
    });
  } while (++i <= globalConfig.maxRequests);
  done();
}

function gather(config, previousRefs, insertData) {
  globalConfig = config;
  return new Promise((resolve) => {
    it = main(previousRefs, insertData, resolve);
    it.next();
  });
}

module.exports = { gather };
