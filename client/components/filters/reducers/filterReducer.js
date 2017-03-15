import { combineReducers } from 'redux';
import * as actions from 'components/filters/actions/actionTypes';

function keywords(state = null, action) {
  switch (action.type) {
    case actions.ADD_KEYWORD:
      return [...(state || []), action.keyword];

    case actions.REMOVE_KEYWORD: {
      const newState = [...state];
      const index = newState.indexOf(action.keyword);

      if (index < 0) {
        return state;
      }

      newState.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
}

function age(state = 'w', action) {
  switch (action.type) {
    case actions.SET_AGE:
      return action.selectedAge;

    default:
      return state;
  }
}

function locations(state = {
  all: [],
  selected: [],
}, action) {
  switch (action.type) {
    case actions.SET_LOCATIONS:
      return Object.assign({}, state, {
        all: action.locations,
      });
    case actions.ADD_LOCATION: {
      const exists = state.selected.indexOf(action.index) >= 0;
      return exists ? state : Object.assign({}, state, {
        selected: [...state.selected, action.index],
      });
    }
    case actions.REMOVE_LOCATION: {
      const exists = state.selected.indexOf(action.index);
      return exists < 0 ? state : Object.assign({}, state, {
        selected: [
          ...state.selected.slice(0, exists),
          ...state.selected.slice(exists + 1, state.length),
        ],
      });
    }

    default:
      return state;
  }
}

function contractTypes(state = {
  all: [],
  selected: [],
}, action) {
  switch (action.type) {
    case actions.SET_CONTRACT_TYPES:
      return Object.assign({}, state, {
        all: action.contractTypes,
      });
    case actions.ADD_CONTRACT_TYPE: {
      const exists = state.selected.indexOf(action.index) >= 0;
      return exists ? state : Object.assign({}, state, {
        selected: [...state.selected, action.index],
      });
    }
    case actions.REMOVE_CONTRACT_TYPE: {
      const exists = state.selected.indexOf(action.index);
      return exists < 0 ? state : Object.assign({}, state, {
        selected: [
          ...state.selected.slice(0, exists),
          ...state.selected.slice(exists + 1, state.length),
        ],
      });
    }

    default:
      return state;
  }
}

export default combineReducers({
  keywords,
  locations,
  contractTypes,
  age,
});
