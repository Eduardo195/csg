import * as actions from 'components/search/actions/actionTypes';
import filters from 'components/filters/reducers/filterReducer';
import { combineReducers } from 'redux';

function isLoading(state = false, action) {
    switch (action.type) {
    case actions.SET_IS_LOADING:
        return action.isLoading;

    default:
        return state;
    }
}

function resultCount(state = 0, action) {
    switch (action.type) {
    case actions.SET_RESULT_COUNT:
        return action.count;

    default:
        return state;
    }
}

function results(state = null, action) {
    switch (action.type) {
    case actions.SET_RESULTS:
        return action.results;

    default:
        return state;
    }
}

function page(state = 1, action) {
    switch (action.type) {
    case actions.SET_PAGE:
        return action.page >= 1 ? action.page : 1;
    default:
        return state;
    }
}

function itemsPerPage(state = 10, action) {
    switch (action.type) {
    default:
        return state;
    }
}

export default combineReducers({
    isLoading,
    resultCount,
    results,
    filters,
    page,
    itemsPerPage,
});
