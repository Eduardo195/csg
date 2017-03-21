import { connect } from 'react-redux';
import { getRegistrationEmail } from 'components/registration/selectors/selectors';
import RegistrationSuccess from '../registrationSuccess';

function mapStateToProps(state) {
  return {
    email: getRegistrationEmail(state),
  };
}

export default connect(mapStateToProps)(RegistrationSuccess);
