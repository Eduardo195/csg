import { connect } from 'react-redux';
import { register, clearRegError } from 'components/registration/actions/actions';
import { getRegistrationErrors } from 'components/registration/selectors/selectors';
import LocalRegistration from '../localRegistration';

function mapStateToProps(state) {
  return {
    registrationErrors: getRegistrationErrors(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register(username, password) {
      dispatch(register(username, password));
    },
    handleUnmount() {
      dispatch(clearRegError());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalRegistration);
