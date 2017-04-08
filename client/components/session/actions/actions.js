import SessionService from 'services/session/sessionService';
import { setOverlayVisibility } from 'components/overlay/actions/actions';
import * as types from './types';

export function setSession(user) {
  return {
    type: types.SET_SESION,
    user,
  };
}

export function removeSession() {
  return {
    type: types.REMOVE_SESSION,
  };
}

export function logout() {
  return (dispatch) => {
    dispatch(setOverlayVisibility(true));
    SessionService.logout().then(() => {
      window.location = '/';
    }).catch(() => {
      window.location = '/';
    });
  };
}
