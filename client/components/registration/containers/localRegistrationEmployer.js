import { connect } from 'react-redux';
import { registerEmployer } from 'components/registration/actions/actions';
import { getRegistrationErrors } from 'components/registration/selectors/selectors';
import LocalRegistration from '../localRegistrationEmployer';

function mapStateToProps(state) {
  return {
    registrationErrors: getRegistrationErrors(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register(username, password, nif) {
      dispatch(registerEmployer(username, password, nif));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalRegistration);
