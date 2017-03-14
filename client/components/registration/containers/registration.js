import $ from 'jquery';
import { connect } from 'react-redux';
import { setServerErrorRegError, setServerErrorBadCredentials, clearRegError } from 'components/registration/actions/actions';
import { getRegError } from 'components/registration/selectors/selectors';
import { getUsername } from 'components/user/selectors/sessionSelectors';
import Registration from '../registration';

function mapStateToProps(state) {
    return {
        isLoggedIn: !!getUsername(state),
        error: getRegError(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register(username, password) {
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
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
