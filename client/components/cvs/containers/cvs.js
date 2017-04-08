import { connect } from 'react-redux';
import { getCv, getIsLoading, getError, getSuccess } from '../selectors/selectors';
import { uploadCv } from '../actions/actions';

import Cvs from '../cvs';

function mapStateToProps(state) {
  return {
    cv: getCv(state),
    error: getError(state),
    success: getSuccess(state),
    isLoading: getIsLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      // TODO: get Cvs
    },
    uploadCv(fileBlob) {
      dispatch(uploadCv(fileBlob));
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cvs);
