import { connect } from 'react-redux';
import { register } from 'components/registration/actions/actions';
import { getSubmissionErrors, getsValidationErrors } from 'components/registration/selectors/selectors';
import LocalRegistration from '../localRegistration';

function mapStateToProps(state) {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(LocalRegistration);
