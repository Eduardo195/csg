/* eslint import/prefer-default-export: 0 */
import ProfileService from 'services/profile/candidate';
import * as types from './employerVisibilityTypes';

export function clearVisibilityQuery() {
  return {
    type: types.CLEAR_EMP_VISIBILITY_QUERY,
  };
}

function setVisibility(isVisible) {
  return {
    type: types.SET_EMP_VISIBILITY,
    isVisible,
  };
}

function setVisibilityError(error) {
  return {
    type: types.SET_EMP_VISIBILITY_ERROR,
    error,
  };
}

function setVisibilitySuccess(success) {
  return {
    type: types.SET_EMP_VISIBILITY_SUCCESS,
    success,
  };
}

function setVisibilityIsLoading(isLoading) {
  return {
    type: types.SET_EMP_VISIBILITY_IS_LOADING,
    isLoading,
  };
}

export function setVisibilityData(isVisible) {
  return (dispatch) => {
    dispatch(clearVisibilityQuery());
    dispatch(setVisibilityIsLoading(true));
    dispatch(setVisibilityError(null));
    ProfileService.setVisibility(isVisible).then((rsp) => {
      if (rsp.success) {
        dispatch(setVisibility(isVisible));
        dispatch(setVisibilitySuccess(true));
      } else {
        dispatch(setVisibilityError(rsp.msg));
      }
      dispatch(setVisibilityIsLoading(false));
    }).catch((err) => {
      dispatch(setVisibilityError(`${err.status} - ${err.statusText}`));
      dispatch(setVisibilityIsLoading(false));
    });
  };
}
