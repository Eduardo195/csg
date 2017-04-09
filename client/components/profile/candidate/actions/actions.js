/* eslint import/prefer-default-export: 0 */
import ProfileService from 'services/profile/candidate';
import * as types from './types';

function setProfile(profile) {
  return {
    type: types.SET_PROFILE,
    profile,
  };
}

function setProfileError(error) {
  return {
    type: types.SET_PROFILE_ERROR,
    error,
  };
}

function setProfileIsLoading(isLoading) {
  return {
    type: types.SET_PROFILE_IS_LOADING,
    isLoading,
  };
}

export function loadProfile() {
  return (dispatch) => {
    dispatch(setProfileIsLoading(true));
    dispatch(setProfileError(null));
    ProfileService.getProfile().then((rsp) => {
      if (rsp.success) {
        dispatch(setProfile(rsp.profile));
      } else {
        dispatch(setProfileError(rsp.msg));
      }
      dispatch(setProfileIsLoading(false));
    }).catch((err) => {
      dispatch(setProfileError(`${err.status} - ${err.statusText}`));
      dispatch(setProfileIsLoading(false));
    });
  };
}
