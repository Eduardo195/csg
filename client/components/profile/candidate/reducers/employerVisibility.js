
import { get } from 'lodash';
import { combineReducers } from 'redux';
import { SET_PROFILE } from 'components/profile/candidate/actions/types';
import * as types from 'components/profile/candidate/actions/employerVisibilityTypes';

function isLoading(state = false, action) {
  switch (action.type) {

    case types.SET_EMP_VISIBILITY_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

function success(state = null, action) {
  switch (action.type) {

    case types.SET_EMP_VISIBILITY_SUCCESS:
      return action.success;

    case types.CLEAR_EMP_VISIBILITY_QUERY:
      return null;

    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {

    case types.SET_EMP_VISIBILITY_ERROR:
      return action.error;

    case types.CLEAR_EMP_VISIBILITY_QUERY:
      return null;

    default:
      return state;
  }
}

function employerVisibility(state = null, action) {
  switch (action.type) {

    case SET_PROFILE: {
      return get(action, 'profile.employerVisibility', null);
    }

    case types.SET_EMP_VISIBILITY:
      return get(action, 'isVisible', null);

    default:
      return state;
  }
}

export default combineReducers({
  query: combineReducers({
    isLoading,
    success,
    error,
  }),
  employerVisibility,
});
