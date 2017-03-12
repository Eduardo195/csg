export const SET_LATEST = 'latest/SET_LATEST';

export function setLatest(latest) {
    return {
        type: SET_LATEST,
        latest,
    };
}
