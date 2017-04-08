import * as actions from '../actions/types';

function user(state = null, action) {
  switch (action.type) {
    case actions.SET_SESION:
      return action.user;

    case actions.REMOVE_SESSION:
      return null;

    default:
      return state;
  }
}

export default user;
