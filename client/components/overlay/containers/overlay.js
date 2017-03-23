import { connect } from 'react-redux';
import { setOverlayVisibility } from '../actions/actions';
import Overlay from '../overlay';

function mapStateToProps(state) {
  return {
    isVisible: state.overlay,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(setOverlayVisibility(false));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
