import { connect } from 'react-redux';
import { loadProfile } from '../actions/actions';
import { getProfileIsLoading, getProfileError, getProfile } from '../selectors/selectors';
import Profile from '../profile';

function mapStateToProps(state) {
  return {
    isLoading: getProfileIsLoading(state),
    profile: getProfile(state),
    error: getProfileError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(loadProfile());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
