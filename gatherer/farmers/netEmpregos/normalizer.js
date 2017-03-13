const LOCATIONS = require('../../../shared/data/districts');
const NOT_SPECIFIED = 'Not specified';

const Normalizer = {
  normalizeContractType(cc) {
    // TODO: Get this from DB vs make it a service?
    switch (cc) {

      case 'Tempo Inteiro':
        return { index: 0, label: 'Full time'};

      case 'Part-Time':
        return { index: 1, label: 'Part time'};

      case 'Estágio':
        return { index: 2, label: 'Estágio'};

      default: {
        console.error(`Could not convert ${cc} to contract type`);
        return { index: -1, label: cc || NOT_SPECIFIED};
      }
    }
  },

  normalizeLocation(needle) {
    const pile = LOCATIONS.find(loc => loc.label === needle || loc.simple === needle)
    if(!pile) {
      return { index: -1, label: needle || NOT_SPECIFIED };
    }
    return { index: pile.index, label: pile.label };
  }

}

module.exports = Normalizer;
