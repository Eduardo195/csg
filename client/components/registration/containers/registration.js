import { connect } from 'react-redux';
import { getRegistrationSuccess } from 'components/registration/selectors/selectors';
import Registration from '../registration';

function mapStateToProps(state) {
    return {
        registrationSuccess: getRegistrationSuccess(state),
    };
}

export default connect(mapStateToProps)(Registration);
