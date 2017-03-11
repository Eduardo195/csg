import * as actionTypes from './actionTypes';

export function setPage(page) {
    return {
        type: actionTypes.SET_PAGE,
        page,
    };
}
