import { connect } from 'react-redux';
import { getPersonalSuccess, getPersonalError, getPersonalIsLoading, getName, getSurname } from '../selectors/selectors';
import { setPersonalData } from '../actions/personal';
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
