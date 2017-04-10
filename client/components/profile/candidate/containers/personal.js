import { connect } from 'react-redux';
import { getPersonalSuccess, getPersonalError, getPersonalIsLoading, getName, getSurname } from '../selectors/selectors';
import { setPersonalData, clearPersonalQuery } from '../actions/personal';
import Personal from '../personal';

function mapStateToProps(state) {
  return {
    isLoading: getPersonalIsLoading(state),
    success: getPersonalSuccess(state),
    error: getPersonalError(state),
    name: getName(state),
    surname: getSurname(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit(personal) {
      dispatch(setPersonalData(personal));
    },
    handleUnmount() {
      dispatch(clearPersonalQuery());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
