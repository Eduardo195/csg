import { connect } from 'react-redux';
import { getYearsExperience, getKeywords, getProfessionalSuccess, getProfessionalError,
  getProfessionalIsLoading } from '../selectors/selectors';
import { setProfessionalData, clearProfessionalQuery } from '../actions/professional';
import Professional from '../professional';

function mapStateToProps(state) {
  return {
    isLoading: getProfessionalIsLoading(state),
    success: getProfessionalSuccess(state),
    error: getProfessionalError(state),
    yearsXp: getYearsExperience(state),
    keywords: getKeywords(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUnmount() {
      dispatch(clearProfessionalQuery());
    },
    handleSubmit(state) {
      dispatch(clearProfessionalQuery());
      dispatch(setProfessionalData({
        yearsXp: state.yearsXp.value,
        keywords: state.keywords,
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Professional);
