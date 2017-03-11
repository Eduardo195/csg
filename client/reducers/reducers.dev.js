import deepFreeze from 'deep-freeze';

function freeze(stateOrAction) {
    return stateOrAction !== undefined ? deepFreeze(stateOrAction) : stateOrAction;
}

// Wrap the reducer in dev to freeze the state and action
export default reducer => (state, action) => reducer(
    freeze(state), freeze(action),
);
