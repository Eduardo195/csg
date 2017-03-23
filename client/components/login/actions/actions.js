import $ from 'jquery';
import { hashHistory } from 'react-router';
import { setUser } from 'components/user/actions/userActions';
import { setOverlayVisibility } from 'components/overlay/actions/actions';
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
    dispatch(setOverlayVisibility(true));
    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: { username, password },
    }).done((rsp) => {
      if (rsp.success) {
        dispatch(setUser(rsp.user));
        hashHistory.push('/user/home');
      } else {
        dispatch(setLoginError(rsp.err));
      }
    }).fail(() => {
      dispatch(setLoginError('Unknown error'));
    }).always(() => {
      dispatch(setOverlayVisibility(false));
    });
  };
}
