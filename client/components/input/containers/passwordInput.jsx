import { connect } from 'react-redux';
import validator from 'services/validators/password';
import SelfValidatingInput from '../selfValidatingInput';

function mapStateToProps(state, ownProps) {
  return {
    validate: validator,
    type: 'password',
    label: ownProps.label || 'Create a password',
    placeholder: ownProps.placeholder || 'Password',
    helperText: ownProps.helperText,
  };
}

export default connect(mapStateToProps)(SelfValidatingInput);
