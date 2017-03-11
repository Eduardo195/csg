const MAX_RESULTS = 50;

const Checkers = {
  checkLimit(limit) {
    return !isNaN(limit) && limit > 0 ? Math.min(+limit, MAX_RESULTS) : MAX_RESULTS;
  },
  checkPage(page){
    return !isNaN(page) && page >= 0 ? +page : 0;
  },
  checkLocation(locations) {
    if(Array.isArray(locations)){
      return {
        'location.index': {
          $in: locations.map(v => +v)
        }
      }

    }
    return null;
  },
  checkContractType(contractTypes) {
    if(Array.isArray(contractTypes)){
      return {
        'contractType.index': {
          '$in': contractTypes.map(v => +v)
        }
      }
    }
    return null;
  },
  checkKeywords(keywords) {
      if(Array.isArray(keywords)){
        const regex = keywords.join('|');
        return {
          '$or': [
            { 'src': { '$in': keywords }},
            { 'title': { "$regex": regex, "$options": "i" }},
            { 'industry': { "$regex": regex, "$options": "i" }},
            { 'company': { "$regex": regex, "$options": "i" }},
          ] // $or
        } // return
      }
      return null;
  },
  checkDate(age) {
    const date = getDate(age);
    return date ? {"date" : { $gte : date }} : null;
  }
}

const AGE_OPTIONS = {
  'h': 3600000, // 60 * 60 * 1000  // 1h
  'd': 86400000, // 24 * 60 * 60 * 1000  // 24h
  'w': 604800000, // 7 * 24 * 60 * 60 * 1000  // 7 days
  'm': 2592000000, // 7 * 24 * 60 * 60 * 1000  // 30 days
};

function getDate(age) {
    const subtrahend = AGE_OPTIONS[age];
    return subtrahend ? Date.now() - subtrahend : null;
}

module.exports = Checkers;
