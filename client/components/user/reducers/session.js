import * as actions from 'components/user/actions/userActionTypes';

function session(state = null, action) {
    switch (action.type) {
    case actions.START_SESSION:
        return Object.assign({}, state, {
            username: action.username,
        });

    case actions.END_SESSION:
        return null;

    default:
        return state;
    }
}

export default session;
