import * as actionTypes from './actionTypes';

export function setResults(results) {
    return {
        type: actionTypes.SET_RESULTS,
        results,
    };
}

export function setResultCount(count) {
    return {
        type: actionTypes.SET_RESULT_COUNT,
        count,
    };
}

export function setIsLoading(isLoading) {
    return {
        type: actionTypes.SET_IS_LOADING,
        isLoading,
    };
}
