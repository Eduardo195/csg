import { combineReducers } from 'redux';
import { SET_PROFILE } from 'components/profile/candidate/actions/types';
import * as types from 'components/profile/candidate/actions/professionalTypes';

function isLoading(state = false, action) {
  switch (action.type) {

    case types.SET_PROFESSIONAL_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

function success(state = null, action) {
  switch (action.type) {

    case types.SET_PROFESSIONAL_SUCCESS:
      return action.success;

    case types.CLEAR_PROFESSIONAL_QUERY:
      return null;

    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {

    case types.SET_PROFESSIONAL_ERROR:
      return action.error;

    case types.CLEAR_PROFESSIONAL_QUERY:
      return null;

    default:
      return state;
  }
}

function yearsXp(state = null, action) {
  switch (action.type) {

    case SET_PROFILE:
      return +action.profile.yearsXp || null;

    case types.SET_PROFESSIONAL:
      return +action.professional.yearsXp || null;

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
  yearsXp,
});
