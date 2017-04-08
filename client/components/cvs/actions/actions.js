/* eslint import/prefer-default-export: 0 */
import UploadService from 'services/upload/candidate';
import * as types from './types';

function setIsLoading(isLoading) {
  return {
    type: types.SET_IS_LOADING,
    isLoading,
  };
}

function setError(error) {
  return {
    type: types.SET_ERROR,
    error,
  };
}

function clear() {
  return {
    type: types.CLEAR,
  };
}

function setSuccess() {
  return {
    type: types.SET_SUCCESS,
  };
}

export function uploadCv(cv) {
  return (dispatch) => {
    dispatch(clear());
    dispatch(setIsLoading(true));
    UploadService.uploadCv(cv).then((rsp) => {
      if (rsp.success) {
        dispatch(setSuccess());
      } else {
        dispatch(setError(rsp.msg));
      }
      dispatch(setIsLoading(false));
    }).catch((err) => {
      dispatch(setError(`${err.status} - ${err.statusText}`));
      dispatch(setIsLoading(false));
    });
  };
}
