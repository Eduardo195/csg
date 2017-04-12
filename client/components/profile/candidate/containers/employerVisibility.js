import { connect } from 'react-redux';
import { getEmployerVisibility, getVisibilitySuccess, getVisibilityError,
  getVisibilityIsLoading } from '../selectors/selectors';
import { setVisibilityData, clearVisibilityQuery } from '../actions/employerVisibility';
import EmployerVisibility from '../employerVisibility';

function mapStateToProps(state) {
  return {
    isVisible: getEmployerVisibility(state),
    isLoading: getVisibilityIsLoading(state),
    success: getVisibilitySuccess(state),
    error: getVisibilityError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUnmount() {
      dispatch(clearVisibilityQuery());
    },
    handleSubmit(isVisible) {
      dispatch(clearVisibilityQuery());
      dispatch(setVisibilityData(isVisible));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerVisibility);
