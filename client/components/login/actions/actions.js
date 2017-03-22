import $ from 'jquery';
import { hashHistory } from 'react-router';
import { setUser } from 'components/user/actions/userActions';
import * as actionTypes from './types';

function setLoginError(error) {
  return {
    type: actionTypes.SET_LOGIN_ERROR,
    error,
  };
}

function clearLoginError() {
  return {
    type: actionTypes.CLEAR_LOGIN_ERRORS,
  };
}

export function login(username, password) { // eslint-disable-line import/prefer-default-export
  return (dispatch) => {
    dispatch(clearLoginError());
    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: { username, password },
    }).done((rsp) => {
      if (rsp.success) {
        dispatch(setUser(rsp.user));
        window.location = '/';
      } else if (rsp.err){
        dispatch(setLoginError(rsp.err));
      } else {
        dispatch(setLoginError('Unknown error'));
      }
    }).fail(() => {
      dispatch(setLoginError('Unknown error'));
    });
  };
}
