import * as types from 'components/password/actions/types';

function password(state = null, action) {
  switch (action.type) {
    case types.SET_SUBMISSION_STATUS:
      return action.status;

    default:
      return state;
  }
}

export default password;
