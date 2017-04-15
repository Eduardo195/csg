import Profile from 'components/profile/candidate/containers/profile';
import Home from 'components/home/candidate/containers/home';
import base from './base';

export default [
  { path: '/home', component: Home },
  { path: '/profile', component: Profile },
  ...base,
];
