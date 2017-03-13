import $ from 'jquery';
import * as actionTypes from './userActionTypes';

export function setUser(user) {
    return {
        type: actionTypes.SET_USER,
        user,
    };
}

export function removeUser() {
    return {
        type: actionTypes.REMOVE_USER,
    };
}

export function logout() {
    return (dispatch) => {
        $.ajax({
            url: '/api/logout',
        }).done((rsp) => {
          // TODO: Busy state + redirect
            dispatch(removeUser());
        });
    };
}
