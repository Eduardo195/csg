const toMarkdown = require('to-markdown');
const jsdom = require('jsdom');
const window = jsdom.jsdom().defaultView;
const $ = require("jquery")(window);
const Normalizer = require('./normalizer')
const moment = require('moment');
const sanitizeHtml = require('sanitize-html');

const pToH3 = {
  filter: 'p',
  replacement: (innerHTML, node) => {
      const shouldRepalce = node.classList.contains('fRobotoCondensedRegular');
      return shouldRepalce ? `\n### ${innerHTML}  \n` : `${innerHTML}  `;
  }
}

const h3ToP = {
  filter: 'h3',
  replacement: (innerHTML, node) => {
      const shouldRepalce = node.classList.contains('fOpenSansRegular');
      return shouldRepalce ? `${innerHTML}  ` : `\n### ${innerHTML}  \n`;
  }
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

      const [rawDate, location, rawRef ] = header.find('> span').text().trim().split('|');

      const now = moment();
      const date = moment(`${rawDate.trim()} ${now.hours()}:${now.minutes()}:${now.seconds()}`, "DD.MM.YYYY HH:mm:ss").valueOf()

      // OH THE HUMANITY
      let description = body.find('div.fOpenSansRegular');
      description.find('div.pull-right').remove();

      const cleanContent = sanitizeHtml(
        description.html(),
        { exclusiveFilter: (frame) => !frame.text.trim() } // remove empty tags
      );
      const markdown = sanitizeHtml(toMarkdown(cleanContent, {
        converters: [pToH3, h3ToP],
        // gfm: true // required to parse tables
      }),
      { allowedTags: [] } // clean leftover tags
    );

      return {
        src: 'expressoEmprego',
        title,
        url,
        company,
        date,
        location: Normalizer.normalizeLocation(location.trim()),
        contractType: Normalizer.normalizeContractType(),
        markdown,
        content: cleanContent,
        ref: rawRef.trim().split(" ")[1]
      };;
  },

}


module.exports = scraper;
