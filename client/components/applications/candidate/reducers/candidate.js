import * as actionTypes from '../actions/types';

function applications(state = { error: null, success: null }, action) {
  switch (action.type) {
    case actionTypes.SET_APPLICATIONS_ERROR:
      return {
        error: action.error,
        applications: null,
      };

    case actionTypes.CLEAR_APPLICATIONS_STATUS:
      return { error: null, applications: null };

    case actionTypes.SET_APPLICATIONS:
      return {
        error: null,
        applications: action.applications,
      };

    default:
      return state;
  }
}

export default applications;
