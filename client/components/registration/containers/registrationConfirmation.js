import { connect } from 'react-redux';
import { validateEmailHash } from 'components/registration/actions/actions';
import { getIsHashLoading, getIsHashValid } from 'components/registration/selectors/selectors';
import RegistrationConfirmation from '../registrationConfirmation';

function mapStateToProps(state) {
  return {
    isValid: getIsHashValid(state),
    isLoading: getIsHashLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    validate(hash) {
      dispatch(validateEmailHash(hash));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationConfirmation);
