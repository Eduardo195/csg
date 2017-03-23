import { connect } from 'react-redux';
import { init } from '../actions/actions';
import App from '../app';

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(init());
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
