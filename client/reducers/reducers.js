import { combineReducers } from 'redux';
import dialogs from 'components/dialog/reducers/dialogReducer';
import search from 'components/search/reducers/searchReducer';
import latest from 'components/latest/reducers/latestReducer';
import user from 'components/user/reducers/user';
import registration from 'components/registration/reducers/reducer';
import login from 'components/login/reducers/reducer';
import password from 'components/password/reducers/reducer';
import overlay from 'components/overlay/reducers/reducer';
import {
  opportunity,
  applications,
  myOpportunities,
  deleteOpportunity,
  updateOpportunity } from 'components/opportunity/reducers/employerReducer';
import candidate from 'components/candidate/reducers/reducer';

export default combineReducers({
  overlay,
  search,
  latest,
  dialogs,
  user,
  login,
  myOpportunities,
  applications,
  submissions: combineReducers({
    candidate,
    password,
    registration,
    opportunity,
    deleteOpportunity,
    updateOpportunity,
  }),
});
