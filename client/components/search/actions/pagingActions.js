import * as actionTypes from './actionTypes';

export function setPage(page) { // eslint-disable-line import/prefer-default-export
    return {
        type: actionTypes.SET_PAGE,
        page,
    };
}
