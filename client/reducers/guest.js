import { combineReducers } from 'redux';
import login from 'components/login/reducers/reducer';
import base from './base';

export default combineReducers(
  Object.assign({}, base, {
    login,
  }),
);
