import { setOverlayVisibility } from 'components/overlay/actions/actions';
import SessionService from 'services/session/sessionService';
import * as actionTypes from './types';

function setLoginError(error) {
  return {
    type: actionTypes.SET_LOGIN_ERROR,
    error,
  };
}

export function clearLoginError() {
  return {
    type: actionTypes.CLEAR_LOGIN_ERRORS,
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch(clearLoginError());
    dispatch(setOverlayVisibility(true));
    SessionService.login(username, password).then((rsp) => {
      if (rsp.success) {
        window.location = '/';
      } else {
        dispatch(setLoginError(rsp.msg || 'Unknown error'));
      }
      dispatch(setOverlayVisibility(false));
    }).catch(() => {
      dispatch(setLoginError('Unknown error'));
      dispatch(setOverlayVisibility(false));
    });
  };
}
