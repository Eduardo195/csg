import { connect } from 'react-redux';
import { getCv, uploadCv } from '../actions/cvActions';
import {
  getFilename, getMimetype, getSize, getMetaIsLoading, getMetaError,
  getIsUploading, getUploadError, getUploadSuccess,
} from '../selectors/cvSelectors';
import Cvs from '../cvs';

function mapStateToProps(state) {
  return {
    isLoading: getMetaIsLoading(state),
    isUploading: getIsUploading(state),
    error: getMetaError(state),
    uploadError: getUploadError(state),
    uploadSuccess: getUploadSuccess(state),
    filename: getFilename(state),
    mimetype: getMimetype(state),
    size: getSize(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(getCv());
    },
    handleSubmit(file) {
      dispatch(uploadCv(file));
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cvs);
