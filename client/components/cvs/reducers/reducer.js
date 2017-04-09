import { combineReducers } from 'redux';
import { SET_PROFILE } from 'components/profile/candidate/actions/types';
import * as types from '../actions/types';

function upload(state = {
  error: null,
  success: null,
  isLoading: false,
}, action) {
  switch (action.type) {
    case types.SET_IS_UPLOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });

    case types.SET_UPLOAD_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        success: null,
      });

    case types.SET_UPLOAD_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        success: true,
      });

    case types.CLEAR_UPLOAD:
      return Object.assign({}, state, {
        error: null,
        success: null,
        isLoading: null,
      });

    default:
      return state;
  }
}

function meta(state = {}, action) {
  switch (action.type) {
    case types.SET_META_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });

    case types.SET_META_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        success: null,
      });

    case types.SET_META:
      return Object.assign({}, state, {
        filename: action.meta.filename,
        mimetype: action.meta.mimetype,
        size: action.meta.size,
      });

    // TODO: 1 source of truth
    case SET_PROFILE:
      return Object.assign({}, state, {
        filename: action.profile.cv.filename,
        mimetype: action.profile.cv.mimetype,
        size: action.profile.cv.size,
      });

    case types.CLEAR_META:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  upload,
  meta,
});
