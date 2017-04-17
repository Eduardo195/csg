/* eslint import/prefer-default-export: 0 */
import ProfileService from 'services/profile/candidate';
import UploadService from 'services/upload/candidate';
import * as types from './cvTypes';

function setMetaError(error) {
  return {
    type: types.SET_META_ERROR,
    error,
  };
}

function setMetaIsLoading(isLoading) {
  return {
    type: types.SET_META_IS_LOADING,
    isLoading,
  };
}

function clearMeta() {
  return {
    type: types.CLEAR_META,
  };
}

function setMeta(meta) {
  return {
    type: types.SET_META,
    meta,
  };
}

export function getCv() {
  return (dispatch) => {
    dispatch(clearMeta());
    dispatch(setMetaIsLoading(true));
    ProfileService.getMeta().then((rsp) => {
      if (rsp.success) {
        dispatch(setMeta(rsp.meta));
      } else {
        dispatch(setMetaError(rsp.msg));
      }
      dispatch(setMetaIsLoading(false));
    }).catch((err) => {
      dispatch(setMetaError(`${err.status} - ${err.statusText}`));
      dispatch(setMetaIsLoading(false));
    });
  };
}

function setIsUploading(isLoading) {
  return {
    type: types.SET_IS_UPLOADING,
    isLoading,
  };
}

function setUploadError(error) {
  return {
    type: types.SET_UPLOAD_ERROR,
    error,
  };
}

function clearUpload() {
  return {
    type: types.CLEAR_UPLOAD,
  };
}

function setUploadSuccess() {
  return {
    type: types.SET_UPLOAD_SUCCESS,
  };
}

export function uploadCv(cv) {
  return (dispatch) => {
    dispatch(clearUpload());
    dispatch(setIsUploading(true));
    UploadService.uploadCv(cv).then((rsp) => {
      if (rsp.success) {
        dispatch(setUploadSuccess());
        dispatch(getCv());
      } else {
        dispatch(setUploadError(rsp.msg));
      }
      dispatch(setIsUploading(false));
    }).catch((err) => {
      dispatch(setUploadError(`${err.status} - ${err.statusText}`));
      dispatch(setIsUploading(false));
    });
  };
}
