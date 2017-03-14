import { setPage } from 'components/search/actions/pagingActions';
import { setIsLoading, setResults, setResultCount } from 'components/search/actions/searchActions';
import searchService from 'services/search/searchService';
import * as actionTypes from './actionTypes';

export function setFilters(filters) {
    return {
        type: actionTypes.SET_FILTERS,
        filters,
    };
}

export function addKeyword(keyword) {
    return {
        type: actionTypes.ADD_KEYWORD,
        keyword,
    };
}

export function removeKeyword(keyword) {
    return {
        type: actionTypes.REMOVE_KEYWORD,
        keyword,
    };
}

export function setAge(selectedAge) {
    return {
        type: actionTypes.SET_AGE,
        selectedAge,
    };
}

export function setLocations(locations) {
    return {
        type: actionTypes.SET_LOCATIONS,
        locations,
    };
}

export function addLocation(index) {
    return {
        type: actionTypes.ADD_LOCATION,
        index,
    };
}

export function removeLocation(index) {
    return {
        type: actionTypes.REMOVE_LOCATION,
        index,
    };
}
export function setContractTypes(contractTypes) {
    return {
        type: actionTypes.SET_CONTRACT_TYPES,
        contractTypes,
    };
}

export function addContractType(index) {
    return {
        type: actionTypes.ADD_CONTRACT_TYPE,
        index,
    };
}

export function removeContractType(index) {
    return {
        type: actionTypes.REMOVE_CONTRACT_TYPE,
        index,
    };
}

export function search(preservePaging) {
    return (dispatch, getState) => {
        const { filters, itemsPerPage } = searchData;
        const page = preservePaging ? searchData.page : 1;
        if (!preservePaging) {
            dispatch(setPage(1));
        }
        const params = Object.assign({}, filters, { itemsPerPage, page });

        dispatch(setIsLoading(true));
        searchService.search(params).then((data) => {
            dispatch(setResultCount(data.count));
            dispatch(setResults(data.data));
            dispatch(setIsLoading(false));
        }).catch((error) => {
            dispatch(setIsLoading(false));
            console.error('SOMETHING BROKE Y\'ALL', error);
        });
    };
}
