const moment = require('moment');
const Normalizer = require('./normalizer');
const sanitizeHtml = require('sanitize-html');
const jsdom = require('jsdom');
const jquery = require('jquery');
const get = require('lodash/get');

const window = jsdom.jsdom().defaultView;
const $ = jquery(window);

const pToH3 = (tagName, attribs) => {
  let replacementTag = 'p';
  const cls = get(attribs, 'class') || '';
  if (cls.indexOf('fRobotoCondensedRegular' >= 0)) {
    replacementTag = 'h3';
  }
  return { tagName: replacementTag };
};

const h3ToP = (tagName, attribs) => {
  let replacementTag = 'h3';
  const cls = get(attribs, 'class') || '';
  if (cls.indexOf('fOpenSansRegular') >= 0) {
    replacementTag = 'p';
  }
  return { tagName: replacementTag };
};

const scraper = {
  getPostUrls(html, previousRefs) {
    const data = [];
    $(html).find('.resultadosBox').each((index, elem) => {
      const url = $(elem).find('a').attr('href');
      const absoluteUrl = `http://expressoemprego.pt/${url}`;
      const split = url.split('/');
      const ref = split[split.length - 1];
      if (previousRefs.indexOf(ref) < 0) {
        data.push(absoluteUrl);
        previousRefs.push(ref);
      }
    });
    return data;
  },

  scrapePost(url, html) {
    html = $(html);  // eslint-disable-line no-param-reassign

    const body = $(html.find('#ContentPlaceHolder_pnAnuncio'));
    const header = $(body.find('.posRelative'));

    const title = header.find('> h1').text().trim();
    const company = header.find('> h2').text().trim();

    const [rawDate, location, rawRef] = header.find('> span').text().trim().split('|');

    const now = moment();
    const date = moment(`${rawDate.trim()} ${now.hours()}:${now.minutes()}:${now.seconds()}`, 'DD.MM.YYYY HH:mm:ss')
      .valueOf();

      // OH THE HUMANITY
    const description = body.find('div.fOpenSansRegular');
    description.find('div.pull-right').remove();
    const cleanContent = sanitizeHtml(description.html(), {
        exclusiveFilter: frame => !frame.text.trim(),
        transformTags: { h3: h3ToP, p: pToH3 }
      }
    );

    return {
      src: 'expressoEmprego',
      title,
      url,
      company,
      date,
      location: Normalizer.normalizeLocation(location.trim()),
      contractType: Normalizer.normalizeContractType(),
      content: cleanContent,
      ref: rawRef.trim().split(' ')[1]
    };
  }

};


module.exports = scraper;
