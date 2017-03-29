import UserService from 'services/user/userService';
import SessionService from 'services/session/sessionService';
import { setOverlayVisibility } from 'components/overlay/actions/actions';
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
    dispatch(setOverlayVisibility(true));
    SessionService.logout().then(() => {
      window.location = '/';
    }).catch(() => {
      window.location = '/';
    });
  };
}

export function deleteAccount() {
  return (dispatch) => {
    dispatch(setOverlayVisibility(true));
    UserService.delete().then(() => {
      dispatch(setOverlayVisibility(false));
    }).catch(() => {
      dispatch(setOverlayVisibility(false));
    });
  };
}
