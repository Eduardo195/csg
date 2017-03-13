import * as actions from 'components/latest/actions/latestActions';

function latest(state = [], action) {
    switch (action.type) {
    case actions.SET_LATEST:
        return action.latest;

    default:
        return state;
    }
}

export default latest;
