import { connect } from 'react-redux';
import validator from 'services/validators/nif';
import SelfValidatingInput from '../selfValidatingInput';

function mapStateToProps() {
  return {
    validate: validator,
    type: 'number',
    label: 'Your NIF',
    placeholder: 'NIF',
    helperText: 'Your company\'s NIF.',
  };
}

export default connect(mapStateToProps)(SelfValidatingInput);
