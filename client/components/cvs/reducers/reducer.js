import * as types from '../actions/types';

function cvs(state = {
  file: null,
  error: null,
  success: null,
  isLoading: false,
}, action) {
  switch (action.type) {
    case types.SET_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });

    case types.SET_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        success: null,
      });

    case types.SET_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        success: true,
      });

    case types.CLEAR:
      return Object.assign({}, state, {
        error: null,
        success: null,
        isLoading: null,
      });

    default:
      return state;
  }
}

export default cvs;
