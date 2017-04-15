const LOCATIONS = require('../../../shared/data/districts');
const CONTRACT_TYPES = require('../../../shared/data/contractTypes');

const NOT_SPECIFIED = 'Not specified';

const Normalizer = {
  normalizeContractType(cc) {
    // TODO: Get this from DB vs make it a service?
    switch (cc) {
    case 'Tempo Inteiro':
      return CONTRACT_TYPES[0];

    case 'Part-Time':
      return CONTRACT_TYPES[1];

    case 'Estágio':
      return CONTRACT_TYPES[2];

    default: {
      console.error(`Could not convert ${cc} to contract type`);
      return { id: -1, label: cc || NOT_SPECIFIED };
    }
    }
  },

  normalizeLocation(needle) {
    const match = LOCATIONS.find(loc => loc.label === needle || loc.simple === needle);
    if (!match) {
      return { id: -1, label: needle || NOT_SPECIFIED };
    }
    return match;
  }

};

module.exports = Normalizer;
