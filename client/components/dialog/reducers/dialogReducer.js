import * as actionTypes from '../actions/types';

function dialogs(state = null, action) {
    switch (action.type) {
    case actionTypes.SHOW_DIALOG:
        return {
            config: action.config,
            componentId: action.componentId,
        };

    case actionTypes.HIDE_DIALOG:
        return null;

    default:
        return state;
    }
}

export default dialogs;
