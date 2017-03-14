import $ from 'jquery';
import { connect } from 'react-redux';
import { register } from 'components/registration/actions/actions';
import { getSubmissionErrors, getsValidationErrors } from 'components/registration/selectors/selectors';
import { getUsername } from 'components/user/selectors/sessionSelectors';
import Registration from '../registration';

function mapStateToProps(state) {
    return {
        isLoggedIn: !!getUsername(state),
        submissionErrors: getSubmissionErrors(state),
        validationErrors: getsValidationErrors(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register(username, password) {
            dispatch(register(username, password));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
