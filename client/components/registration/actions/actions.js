import * as actionTypes from './actionTypes';
import CVS from 'services/credentialValidatorService';

export function setServerErrorRegError() {
    return {
        type: actionTypes.SERVER_ERROR,
        msg: 'Server error - that\'s all we know - Sorry!',
    };
}

export function setServerErrorBadCredentials() {
    return {
        type: actionTypes.SERVER_ERROR,
        msg: 'Please check your credentials',
    };
}

export function clearRegError() {
    return {
        type: actionTypes.CLEAR_ERROR,
    };
}


export function setInvalidUsernameMessage(msg) {
    return {
        type: actionTypes.SET_INVALID_EMAIL,
        msg,
    };
}

export function setInvalidPasswordMessage(msg) {
    return {
        type: actionTypes.SET_INVALID_PASSWORD,
        msg,
    };
}

export function register(username, password) {
    return (dispatch) => {
        const credentials = CVS.validate(username, password);
        const { usernameError, pwdError } = credentials;

        dispatch(setInvalidUsernameMessage(usernameError));
        dispatch(setInvalidPasswordMessage(pwdError));

        if (!usernameError && !pwdError) {
            $.ajax({
                url: '/api/register',
                method: 'POST',
                data: { username, password },
            }).fail((req) => {
                if (req.status === 401) { // invalid params
              // invalid credentials - user likely went around our validation. Naughty boy
                    dispatch(setServerErrorBadCredentials());
                } else if (req.status === 500) {
              // server broke while processing
                    dispatch(setServerErrorRegError());
                }
            }).done(() => {
                dispatch(clearRegError());
            // TODO: Send to email confirmation page
            });
        }
    };
}
