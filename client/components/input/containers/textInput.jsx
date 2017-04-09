import { connect } from 'react-redux';
import validator from 'services/validators/text';
import SelfValidatingInput from '../selfValidatingInput';

function mapStateToProps(state) {
  return {
    validate: validator,
    type: 'text',
  };
}

export default connect(mapStateToProps)(SelfValidatingInput);
