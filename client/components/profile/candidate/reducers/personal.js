import { combineReducers } from 'redux';
import { SET_PROFILE } from 'components/profile/candidate/actions/types';
import * as types from 'components/profile/candidate/actions/personalTypes';

function isLoading(state = false, action) {
  switch (action.type) {

    case types.SET_PERSONAL_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

function success(state = null, action) {
  switch (action.type) {

    case types.SET_PERSONAL_SUCCESS:
      return action.success;

    case types.CLEAR_PERSONAL_QUERY:
      return null;

    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {

    case types.SET_PERSONAL_ERROR:
      return action.error;

    case types.CLEAR_PERSONAL_QUERY:
      return null;

    default:
      return state;
  }
}

function name(state = null, action) {
  switch (action.type) {

    case SET_PROFILE:
      return action.profile.name || null;

    case types.SET_PERSONAL:
      return action.personal.name || null;


    default:
      return state;
  }
}

function surname(state = null, action) {
  switch (action.type) {

    case SET_PROFILE:
      return action.profile.surname || null;

    case types.SET_PERSONAL:
      return action.personal.surname || null;

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
  name,
  surname,
});
