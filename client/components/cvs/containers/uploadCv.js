import { connect } from 'react-redux';
import { getIsUploading, getUploadError, getUploadSuccess } from '../selectors/selectors';
import { uploadCv } from '../actions/actions';
import UploadCv from '../uploadCv';

function mapStateToProps(state) {
  return {
    error: getUploadError(state),
    success: getUploadSuccess(state),
    isUploading: getIsUploading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    upload(fileBlob) {
      dispatch(uploadCv(fileBlob));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadCv);
