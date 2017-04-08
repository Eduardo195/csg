import * as actionTypes from '../actions/types';

function apply(state = { error: null, success: null }, action) {
  switch (action.type) {
    case actionTypes.SET_APPLY_ERROR:
      return {
        error: action.error,
        id: null,
      };

    case actionTypes.CLEAR_APPLY_STATUS:
      return { error: null, id: null };

    case actionTypes.SET_APPLY_SUCCESS:
      return {
        error: false,
        success: action.id,
      };

    default:
      return state;
  }
}

export default apply;
