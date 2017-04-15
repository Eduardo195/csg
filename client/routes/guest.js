import Login from 'components/login/containers/login';
import PasswordReset from 'components/password/containers/reset';
import PasswordResetForm from 'components/password/containers/resetForm';
import Registration from 'components/registration/containers/registration';
import RegistrationSuccess from 'components/registration/containers/registrationSuccess';
import RegistrationConfirmation from 'components/registration/containers/registrationConfirmation';
import RegistrationEmployer from 'components/registration/employerRegistration';
import base from './base';

export default [
  { path: '/password/reset', component: PasswordReset },
  { path: '/password/reset/:hash', component: PasswordResetForm },
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/registration/employer', component: RegistrationEmployer },
  { path: '/registration/success', component: RegistrationSuccess },
  { path: '/registration/confirmation/:hash', component: RegistrationConfirmation },
  ...base,
];
