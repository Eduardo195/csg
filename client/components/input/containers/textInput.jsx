import { connect } from 'react-redux';
import validator from 'services/validators/name';
import SelfValidatingInput from '../selfValidatingInput';

function mapStateToProps() {
  return {
    validate: validator,
  };
}

export default connect(mapStateToProps)(SelfValidatingInput);
