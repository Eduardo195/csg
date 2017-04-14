const LOCATIONS = require('../../../shared/data/districts');

const NOT_SPECIFIED = 'Not specified';

const Normalizer = {
  normalizeContractType() {
    return { id: 0, label: 'Full time' }; // they only allow full time
  },

  normalizeLocation(needle) {
    const pile = LOCATIONS.find(loc => loc.label === needle || loc.simple === needle);
    if (!pile) {
      return { id: -1, label: needle || NOT_SPECIFIED };
    }
    return { id: pile.index, label: pile.label };
  }

};

module.exports = Normalizer;
