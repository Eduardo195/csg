import { connect } from 'react-redux';
import validate from 'services/validators/cv';
import FileInput from '../file';

function mapStateToProps() {
  return {
    validate,
    helperText: 'Max size: 1MB',
  };
}

export default connect(mapStateToProps)(FileInput);
