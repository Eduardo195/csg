const toMarkdown = require('to-markdown');
const jsdom = require('jsdom');
const window = jsdom.jsdom().defaultView;
const $ = require("jquery")(window);
const Normalizer = require('./normalizer')

const pToH3 = {
  filter: 'p',
  replacement: content => `\n### ${content}  \n`
}

const h3ToP = {
  filter: 'h3',
  replacement: content => `${content}  `
}

const scraper = {
  getPostUrls(html) {
    const data = [];
    $(html).find('.resultadosBox').each((index, elem) => {
      data.push($(elem).find('a').attr('href'));
    });
    return data;
  },

  scrapePost(url, html) {

      html = $(html);

      const body = $(html.find('#ContentPlaceHolder_pnAnuncio'))
      const header = $(body.find('.posRelative'));

      const title = header.find('> h1').text().trim();
      const company = header.find('> h2').text().trim();

      let [rawDate, location, rawRef ] = header.find('> span').text().trim().split('|');

      location = location.trim();
      rawDate = rawDate.trim().split('.');

      const date = new Date(rawDate[2], (+rawDate[1]) - 1 , rawDate[0]).getTime();
      const ref = rawRef.trim().split(" ")[1];

      // OH THE HUMANITY
      let description = body.find('div.fOpenSansRegular');
      description.find('div.pull-right').remove();
      const markdown = toMarkdown(description.html().trim(), { converters: [pToH3, h3ToP]});
      const values = {
        src: 'expressoEmprego',
        title,
        url,
        company,
        date,
        location: Normalizer.normalizeLocation(location),
        contractType: Normalizer.normalizeContractType(),
        markdown,
        ref
      };
      return values;
  },

}


module.exports = scraper;
