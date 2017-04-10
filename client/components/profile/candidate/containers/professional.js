import { connect } from 'react-redux';
import { getYearsExperience, getProfessionalSuccess, getProfessionalError,
  getProfessionalIsLoading } from '../selectors/selectors';
import { setProfessionalData, clearProfessionalQuery } from '../actions/professional';
import Professional from '../professional';

function mapStateToProps(state) {
  return {
    isLoading: getProfessionalIsLoading(state),
    success: getProfessionalSuccess(state),
    error: getProfessionalError(state),
    yearsXp: getYearsExperience(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUnmount() {
      console.warn('TODO: handle professional unmount');
    },
    handleSubmit(data) {
      dispatch(clearProfessionalQuery());
      dispatch(setProfessionalData({
        yearsXp: data.yearsXp.value,
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Professional);
