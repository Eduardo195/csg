import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'assets/styles/styles.less';
import Landing from 'components/landing/landing';
import Home from 'components/home/containers/home';
import WorkAd from 'components/advert/containers/workAd';
import Search from 'components/search/containers/search';
import Login from 'components/login/containers/login';
import Registration from 'components/registration/containers/registration';
import RegistrationSuccess from 'components/registration/containers/registrationSuccess';
import RegistrationConfirmation from 'components/registration/containers/registrationConfirmation';
import CreateOpportunity from 'components/opportunity/containers/create';
import EditOpportunity from 'components/opportunity/edit';

import EmployerRegistration from 'components/registration/employerRegistration';
import EmployerOpportunities from 'components/employer/opportunities';
import Doh from 'components/errors/doh';
import FullOffer from 'components/offer/fullOffer';
import Apply from 'components/application/apply';
import Status from 'components/application/status';
import Profile from 'components/user/profile';
import PasswordReset from 'components/password/containers/reset';
import PasswordResetForm from 'components/password/containers/resetForm';

import App from 'components/app/containers/app';

export default function index() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />

        <Route path="home" component={Home} />

        <Route path="employer/post" component={WorkAd} />
        <Route path="employer/opportunities" component={EmployerOpportunities} />
        <Route path="employer/opportunities/:id" component={EmployerOpportunities} />

        <Route path="opportunity/create" component={CreateOpportunity} />
        <Route path="opportunity/edit/:id" component={EditOpportunity} />
        <Route path="/employer/post" component={WorkAd} />
        <Route path="opportunities" component={Search} />
        <Route path="/jobs/:id/status" component={Status} />
        <Route path="/jobs/:id/apply" component={Apply} />
        <Route path="/jobs/:id" component={FullOffer} />
        <Route path="/password/reset" component={PasswordReset} />
        <Route path="/password/reset/:hash" component={PasswordResetForm} />

        <Route path="profile" component={Profile} />
        <Route path="login" component={Login} />
        <Route path="registration" component={Registration} />
        <Route path="registration/employer" component={EmployerRegistration} />
        <Route path="registration/success" component={RegistrationSuccess} />
        <Route path="registration/confirmation/:hash" component={RegistrationConfirmation} />
        <Route path="*" component={Doh} />
      </Route>
    </Router>
  );
}
