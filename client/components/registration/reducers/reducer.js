import * as actionTypes from 'components/registration/actions/actionTypes';

function registration(state = null, action) {
    switch (action.type) {
    case actionTypes.SERVER_ERROR:
        return action.msg;

    case actionTypes.CLEAR_ERROR:
        return null;

    default:
        return state;
    }
}

export default registration;
