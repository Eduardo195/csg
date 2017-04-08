import ApplyForOpportunity from 'components/apply/containers/apply';
import Search from 'components/search/containers/search';
import ViewOpportunity from 'components/opportunity/view';

export default [
  { path: '/opportunities', component: Search },
  { path: '/opportunity/:id', component: ViewOpportunity },
  { path: '/opportunity/:id/apply', component: ApplyForOpportunity },
];
