import Profile from 'components/user/profile';
import Home from 'components/home/employer/containers/home';
import EditOpportunity from 'components/opportunity/containers/edit';
import CreateOpportunity from 'components/opportunity/containers/create';
import EmployerOpportunities from 'components/opportunities/employer/containers/opportunities';
import base from './base';

export default [
  ...base,
  { path: '/home', component: Home },
  { path: '/profile', component: Profile },
  { path: '/opportunity/create', component: CreateOpportunity },
  { path: '/opportunity/edit/:id', component: EditOpportunity },
  { path: '/employer/opportunities', component: EmployerOpportunities },
];
