import * as actionTypes from '../actions/types';

export function opportunity(state = null, action) {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.error;

    case actionTypes.CLEAR_ERROR:
      return null;

    default:
      return state;
  }
}

export function deleteOpportunity(state = {
  error: null,
  id: null,
}, action) {
  switch (action.type) {
    case actionTypes.SET_DELETE_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case actionTypes.CLEAR_DELETE_ERROR:
      return Object.assign({}, state, {
        error: null,
      });

    case actionTypes.SET_DELETE_SUCCESS:
      return Object.assign({}, state, {
        id: action.id,
      });

    default:
      return state;
  }
}

export function updateOpportunity(state = {
  error: null,
  id: null,
}, action) {
  switch (action.type) {
    case actionTypes.SET_UPDATE_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case actionTypes.CLEAR_UPDATE_ERROR:
      return Object.assign({}, state, {
        error: null,
      });

    case actionTypes.SET_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        id: action.id,
      });

    default:
      return state;
  }
}

export function myOpportunities(state = {
  error: null,
  opportunities: [],
}, action) {
  switch (action.type) {
    case actionTypes.SET_GET_ALL_ERROR:
      return Object.assign({}, state, {
        error: action.error,
      });

    case actionTypes.CLEAR_GET_ALL_ERROR:
      return Object.assign({}, state, {
        error: null,
      });

    case actionTypes.SET_MY_OPPORTUNITIES:
      return Object.assign({}, state, {
        opportunities: action.opportunities,
      });

    case actionTypes.SET_DELETE_SUCCESS:
      return Object.assign({}, state, {
        opportunities: state.opportunities.filter(op => op._id !== action.id),
      });

    default:
      return state;
  }
}
