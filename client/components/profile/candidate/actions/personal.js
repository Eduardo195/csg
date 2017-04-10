/* eslint import/prefer-default-export: 0 */
import ProfileService from 'services/profile/candidate';
import * as types from './personalTypes';

export function clearPersonalQuery() {
  return {
    type: types.CLEAR_PERSONAL_QUERY,
  };
}

function setPersonal(personal) {
  return {
    type: types.SET_PERSONAL,
    personal,
  };
}

function setPersonalError(error) {
  return {
    type: types.SET_PERSONAL_ERROR,
    error,
  };
}

function setPersonalSuccess(success) {
  return {
    type: types.SET_PERSONAL_SUCCESS,
    success,
  };
}

function setPersonalIsLoading(isLoading) {
  return {
    type: types.SET_PERSONAL_IS_LOADING,
    isLoading,
  };
}

export function setPersonalData(personal) {
  return (dispatch) => {
    dispatch(clearPersonalQuery());
    dispatch(setPersonalIsLoading(true));
    dispatch(setPersonalError(null));
    ProfileService.setPersonal(personal).then((rsp) => {
      if (rsp.success) {
        dispatch(setPersonal(personal));
        dispatch(setPersonalSuccess(true));
      } else {
        dispatch(setPersonalError(rsp.msg));
      }
      dispatch(setPersonalIsLoading(false));
    }).catch((err) => {
      dispatch(setPersonalError(`${err.status} - ${err.statusText}`));
      dispatch(setPersonalIsLoading(false));
    });
  };
}
