import { combineReducers } from 'redux';
import applications from 'components/applications/candidate/reducers/candidate';
import apply from 'components/apply/reducers/reducer';
import cvs from 'components/cvs/reducers/reducer';
import base from './base';

export default combineReducers(
  Object.assign({}, base, {
    applications,
    apply,
    profile: combineReducers({
      cvs,
    }),
  }),
);
