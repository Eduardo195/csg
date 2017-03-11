import * as actionTypes from '../actions/types';

function addToState(state, prop, value) {
    return Object.assign({}, state, { [prop]: value });
}

function workAd(state = {
    date: Date.now(),
}, action) {
    switch (action.type) {
    case actionTypes.SET_WORK_TITLE:
        return addToState(state, 'title', action.title);

    case actionTypes.SET_WORK_LOCATION:
        return addToState(state, 'location', action.location);

    case actionTypes.SET_WORK_ROLE:
        return addToState(state, 'role', action.role);

    case actionTypes.SET_WORK_EMPLOYER:
        return addToState(state, 'employer', action.employer);

    case actionTypes.SET_WORK_CONTRACT_TYPE:
        return addToState(state, 'contractType', action.contractType);

    case actionTypes.SET_WORK_MIN_PAY:
        return addToState(state, 'minPay', action.value);

    case actionTypes.SET_WORK_MAX_PAY:
        return addToState(state, 'maxPay', action.value);

    case actionTypes.SET_WORK_PAY_RANGE:
        return addToState(state, 'range', action.range);

    case actionTypes.SET_WORK_PAY_CRITERIA:
        return addToState(state, 'criteria', action.criteria);

    case actionTypes.SET_WORK_WRITE_UP:
        return addToState(state, 'markdown', action.markdown);

    default:
        return state;
    }
}

export default workAd;
