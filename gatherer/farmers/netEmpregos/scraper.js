const toMarkdown = require('to-markdown');
const jsdom = require('jsdom');
const window = jsdom.jsdom().defaultView;
const $ = require("jquery")(window);
const Normalizer = require('./normalizer')
const moment = require('moment');

const linkFilter = {
  filter: 'a',
  replacement: content => content
}

const scraper = {
  getPostUrls(html) {
    const data = [];

    $(html).find('div font > table').each((index, table) => {

      table = $(table);

      const header = table.find('font > a').first();
      const title = header.text().trim();
      const url = header[0].href;
      data.push(url);

    });

    return data;
  },

  scrapePost(url, html) {

      html = $(html);

      const center = $(html.find('center table:nth-child(2)'));
      const title = center.find('h1 strong font font').text();

      const detailsTable = $(center.find('tr:nth-child(2)'));
      const company = detailsTable.find('tr:nth-child(1) td:last-child').text().trim();
      const contractType = detailsTable.find('tr:nth-child(2) td:last-child').text().trim();
      const dateStr = detailsTable.find('tr:nth-child(3) td:last-child').text().trim();
      // month is 0-based
      const now = moment();
      const date = moment(`${dateStr} ${now.hours()}:${now.minutes()}:${now.seconds()}`, "DD-MM-YYYY HH:mm:ss").valueOf()
      const location = detailsTable.find('tr:nth-child(4) td:last-child').text().trim();
      const industry = detailsTable.find('tr:nth-child(5) td:last-child').text().trim();
      const ref = detailsTable.find('tr:nth-child(6) td:last-child').text().split(" ")[1];
      // const shortDescription = center.find('tr:last-child p > font:last-child').html().trim();
      const description = center.find('tr:last-child p > font:last-child').html().trim();
      // console.log(description);
      const markdown = toMarkdown(description, {
        converters :[linkFilter],
        gfm: true // required to parse tables
      });

      const values = {
        src: 'netempregos',
        title,
        url,
        company,
        contractType: Normalizer.normalizeContractType(contractType),
        date,
        location: Normalizer.normalizeLocation(location),
        markdown,
        industry,
        ref,
        description
      };
      return values;
  },

}


module.exports = scraper;