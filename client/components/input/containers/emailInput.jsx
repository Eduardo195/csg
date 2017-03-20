import { connect } from 'react-redux';
import validator from 'services/validators/email';
import SelfValidatingInput from '../selfValidatingInput';

function mapStateToProps() {
  return {
    validate: validator,
    type: 'email',
    srLabel: 'Your Email Address',
    placeholder: 'Email',
    helperText: 'We will never share your email with anyone else.',
  };
}

export default connect(mapStateToProps)(SelfValidatingInput);
