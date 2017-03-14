const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 25;

const USERNAME_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 25;

const EMAIL_REGEX = /\S+@\S+\.\S+/;

function checkPassword(username, password) {
    let msg = null;

    if (!password || password.length < PASSWORD_MIN_LENGTH) {
        msg = `Password too small - min ${PASSWORD_MIN_LENGTH} characters`;
    } else if (password.length > PASSWORD_MAX_LENGTH) {
        msg = `Password too big - max ${PASSWORD_MAX_LENGTH} characters`;
    } else if (username === password) {
        msg = 'Oh-oh - Your username and password can\'t be the same';
    }
    return msg;
}

function checkUsername(username) {
    let msg = null;

    if (!username || username.length < USERNAME_MIN_LENGTH) {
        msg = `Username too small - min ${USERNAME_MIN_LENGTH} characters`;
    } else if (username.length > USERNAME_MAX_LENGTH) {
        msg = `Username too big - max ${USERNAME_MAX_LENGTH} characters`;
    } else if (!EMAIL_REGEX.test(username)) {
        msg = 'Wooops - That doesn\'t look like a valid email';
    }

    return msg;
}


// Credentials Validation Service
const CVS = {
    validate(username, password) {
        return {
            usernameError: checkUsername(username),
            pwdError: checkPassword(username, password),
        };
    },
};

export default CVS;
