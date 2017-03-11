import * as actionTypes from './userActionTypes';

export function createSession(username) {
    return {
        type: actionTypes.START_SESSION,
        username,
    };
}

export function endSession() {
    return {
        type: actionTypes.END_SESSION,
    };
}
