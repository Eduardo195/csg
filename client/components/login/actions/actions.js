import { hashHistory } from 'react-router';
import { setUser } from 'components/user/actions/userActions';
import { setOverlayVisibility } from 'components/overlay/actions/actions';
import SessionService from 'services/session/sessionService';
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
    SessionService.login(username, password).then((rsp) => {
      if (rsp.success) {
        dispatch(setUser(rsp.user));
        hashHistory.push('/home');
      } else {
        dispatch(setLoginError(rsp.err));
      }
      dispatch(setOverlayVisibility(false));
    }).catch(() => {
      dispatch(setLoginError('Unknown error'));
      dispatch(setOverlayVisibility(false));
    });
  };
}
