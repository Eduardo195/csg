const LOCATIONS = require('../../../shared/data/districts');

const NOT_SPECIFIED = 'Not specified';

const Normalizer = {
  normalizeContractType() {
    return { index: 0, label: 'Full time' }; // they only allow full time
  },

  normalizeLocation(needle) {
    const pile = LOCATIONS.find(loc => loc.label === needle || loc.simple === needle);
    if (!pile) {
      return { index: -1, label: needle || NOT_SPECIFIED };
    }
    return { index: pile.index, label: pile.label };
  }

};

module.exports = Normalizer;
