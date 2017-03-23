import { connect } from 'react-redux';
import Overlay from '../overlay';

function mapStateToProps(state) {
  return {
    isVisible: state.overlay,
  };
}

export default connect(mapStateToProps)(Overlay);
