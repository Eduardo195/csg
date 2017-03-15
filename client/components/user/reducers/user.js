import * as actions from 'components/user/actions/userActionTypes';

function user(state = null, action) {
  switch (action.type) {
    case actions.SET_USER:
      return action.user;

    case actions.REMOVE_USER:
      return null;

    default:
      return state;
  }
}

export default user;
