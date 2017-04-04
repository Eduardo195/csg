import { combineReducers } from 'redux';
import apply from 'components/opportunity/reducers/candidateReducer';
import applications from 'components/applications/candidate/reducers/candidate';

export default combineReducers({
  apply,
  applications,
});
