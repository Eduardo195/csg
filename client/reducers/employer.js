import { combineReducers } from 'redux';
import * as employer from 'components/opportunity/reducers/employerReducer';
import base from './base';

export default combineReducers(
  Object.assign({}, base, employer),
);
