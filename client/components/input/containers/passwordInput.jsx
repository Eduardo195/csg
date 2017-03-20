import { connect } from 'react-redux';
import validator from 'services/validators/password';
import SelfValidatingInput from '../selfValidatingInput';

function mapStateToProps() {
  return {
    validate: validator,
    type: 'password',
    srLabel: 'Create a password',
    placeholder: 'Password',
    helperText: 'Minimum 8 chars, max 25.',
  };
}

export default connect(mapStateToProps)(SelfValidatingInput);
