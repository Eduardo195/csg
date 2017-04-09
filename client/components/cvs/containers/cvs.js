import { connect } from 'react-redux';
import { getCv } from '../actions/actions';
import { getFilename, getMimetype, getSize, getMetaIsLoading, getMetaError } from '../selectors/selectors';
import Cvs from '../cvs';

function mapStateToProps(state) {
  return {
    isLoading: getMetaIsLoading(state),
    error: getMetaError(state),
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
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cvs);
