import { combineReducers } from 'redux';
import registration from 'components/registration/reducers/reducer';
import password from 'components/password/reducers/reducer';
import login from 'components/login/reducers/reducer';
import base from './base';

export default combineReducers(
  Object.assign({}, base, {
    login,
    password,
    registration,
  }),
);
