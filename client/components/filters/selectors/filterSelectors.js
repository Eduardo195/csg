import Districts from 'districts';
import { convertToMap } from '../helpers/helpers';

export const getKeywords = state => state.search.filters && state.search.filters.keywords;
export const getAge = state => state.search.filters && state.search.filters.age;
export const getLocations = () => convertToMap(Districts);
export const getSelectedLocations = state => (
  state.search.filters &&
  state.search.filters.locations.selected
);

export const getContractTypes = state => (
  state.search.filters &&
  state.search.filters.contractTypes.all
);

export const getSelectedContractTypes = state => (
  state.search.filters &&
  state.search.filters.contractTypes.selected
);
