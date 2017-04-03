import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'assets/styles/styles.less';
import Landing from 'components/landing/landing';
import Home from 'components/home/containers/home';
import Search from 'components/search/containers/search';
import Login from 'components/login/containers/login';
import Registration from 'components/registration/containers/registration';
import RegistrationSuccess from 'components/registration/containers/registrationSuccess';
import RegistrationConfirmation from 'components/registration/containers/registrationConfirmation';
import ViewOpportunity from 'components/opportunity/view';
import EditOpportunity from 'components/opportunity/containers/edit';
import CreateOpportunity from 'components/opportunity/containers/create';
import ApplyForOpportunity from 'components/opportunity/containers/apply';

import EmployerRegistration from 'components/registration/employerRegistration';
import EmployerOpportunities from 'components/employer/opportunities';
import Doh from 'components/errors/doh';
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

        <Route path="employer/opportunities" component={EmployerOpportunities} />
        <Route path="employer/opportunities/:id" component={EmployerOpportunities} />

        {/* Employer */}
        <Route path="/opportunity/create" component={CreateOpportunity} />
        <Route path="/opportunity/edit/:id" component={EditOpportunity} />
        <Route path="/opportunities" component={Search} />
        <Route path="/jobs/:id/status" component={Status} />
        <Route path="/jobs/:id/apply" component={ApplyForOpportunity} />
        <Route path="/password/reset" component={PasswordReset} />
        <Route path="/password/reset/:hash" component={PasswordResetForm} />

        {/* User */}
        <Route path="/opportunity/:id" component={ViewOpportunity} />
        <Route path="/opportunity/:id/apply" component={ApplyForOpportunity} />

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
