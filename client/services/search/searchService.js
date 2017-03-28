/* eslint no-use-before-define: 0*/
import { query } from '../helpers';

const SearchService = {
  search(filters) {
    return query({
      url: '/api/search',
      data: prepFilters(filters),
    });
  },
  getLatest() {
    return query({ url: '/api/latest' });
  },
  getDistricts() {
    return query({ url: '/api/districts' });
  },
  getContractTypes() {
    return query({ url: '/api/contractTypes' });
  },
};

function prepFilters(filters) {
  const { itemsPerPage: limit, page, keywords, age } = filters;
  const contractTypes = filters.contractTypes.selected;
  const locations = filters.locations.selected;

  const newFilters = {
    locations,
    keywords,
    contractTypes,
    limit,
    age,
    page: (page - 1),
  };

  return newFilters;
}

export default SearchService;
