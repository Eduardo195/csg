import { combineReducers } from 'redux';
import applications from 'components/applications/candidate/reducers/candidate';
import profile from 'components/profile/candidate/reducers/reducer';
import apply from 'components/apply/reducers/reducer';
import base from './base';

export default combineReducers(
  Object.assign({}, base, {
    applications,
    profile,
    apply,
  }),
);
