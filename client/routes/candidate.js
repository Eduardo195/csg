import Applications from 'components/applications/candidate/containers/applications';
import Profile from 'components/profile/candidate/containers/profile';
import Home from 'components/home/candidate/containers/home';
import base from './base';

export default [
  { path: '/home', component: Home },
  { path: '/profile', component: Profile },
  { path: '/applications', component: Applications },
  ...base,
];
