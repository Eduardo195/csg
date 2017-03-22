import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';

import Home from 'components/home/home';
import WorkAd from 'components/advert/containers/workAd';
// import Search from 'components/search/containers/search';
// import Login from 'components/login/containers/login';
// import Registration from 'components/registration/containers/registration';
// import RegistrationSuccess from 'components/registration/containers/registrationSuccess';
// import RegistrationConfirmation from 'components/registration/containers/registrationConfirmation';

// import EmployerRegistration from 'components/registration/employerRegistration';
import EmployerHome from 'components/employer/home';
import EmployerOpportunities from 'components/employer/opportunities';
import Doh from 'components/errors/doh';
// import FullOffer from 'components/offer/fullOffer';
// import Apply from 'components/application/apply';
// import Status from 'components/application/status';
// import UserHome from 'components/user/containers/home';
// import Profile from 'components/user/profile';
import PasswordReset from 'components/password/containers/reset';
import PasswordResetForm from 'components/password/containers/resetForm';

export default function routes(){
console.log('routes rendered');
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="employer/post" component={WorkAd} />
        <Route path="employer/home" component={EmployerHome} />
        <Route path="employer/opportunities" component={EmployerOpportunities} />
        <Route path="employer/opportunities/:id" component={EmployerOpportunities} />

        <Route path="/jobs/:id/status" component={Status} />
        <Route path="/jobs/:id/apply" component={Apply} />
        <Route path="/jobs/:id" component={FullOffer} />
        <Route path="/password/reset" component={PasswordReset} />
        <Route path="/password/reset/:hash" component={PasswordResetForm} />

        <Route path="*" component={Doh} />
      </Route>
    </Router>
  );
}
