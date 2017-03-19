import $ from 'jquery';
import { hashHistory } from 'react-router';
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
    }).done(() => {
          // TODO: Busy state + redirect
      dispatch(removeUser());
    });
  };
}

export function deleteAccount() {
  return () => {
    $.ajax({
      url: '/api/user',
      method: 'DELETE',
    }).done(() => {
      hashHistory.push('/');
    });
  };
}
