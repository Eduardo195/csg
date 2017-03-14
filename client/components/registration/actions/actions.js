import * as actionTypes from './actionTypes';

export function setServerErrorRegError() {
    return {
        type: actionTypes.SERVER_ERROR,
        msg: 'Server error - that\'s all we know - Sorry!',
    };
}

export function setServerErrorBadCredentials() {
    return {
        type: actionTypes.SERVER_ERROR,
        msg: 'Please check your credentials',
    };
}

export function clearRegError() {
    return {
        type: actionTypes.CLEAR_ERROR,
    };
}
