import UserService from 'services/user/userService';
import { hashHistory } from 'react-router';
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
    UserService.logout().then(() => {
      dispatch(setOverlayVisibility(false));
      dispatch(removeUser());
      hashHistory.push('/');
    }).catch(() => {
      dispatch(setOverlayVisibility(false));
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
