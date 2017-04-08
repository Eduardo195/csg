import { combineReducers } from 'redux';
import apply from 'components/apply/reducers/reducer';
import applications from 'components/applications/candidate/reducers/candidate';

export default combineReducers({
  apply,
  applications,
});
