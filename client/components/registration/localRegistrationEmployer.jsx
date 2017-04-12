import React from 'react';
import ErrorMessage from 'components/messages/error';
import Recaptcha from 'components/registration/containers/recaptcha';
import EmailInput from 'components/input/containers/emailInput';
import PasswordInput from 'components/input/containers/passwordInput';
import NIFInput from 'components/input/containers/nifInput';

class LocalRegistrationEmployer extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateNif = this.updateNif.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.register(this.state.email, this.state.password, this.state.nif);
    }
  }

  updateEmail(isValid, value) {
    if (isValid) {
      this.setState(Object.assign({}, this.state, {
        email: isValid ? value : null,
      }));
    }
  }

  updatePassword(isValid, value) {
    if (isValid) {
      this.setState(Object.assign({}, this.state, {
        password: isValid ? value : null,
      }));
    }
  }

  updateNif(isValid, value) {
    if (isValid) {
      this.setState(Object.assign({}, this.state, {
        nif: isValid ? value : null,
      }));
    }
  }

  render() {
    const { registrationErrors } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <EmailInput id="email" onChange={this.updateEmail} />
        <NIFInput id="nif" onChange={this.updateNif} />
        <PasswordInput id="pass" onChange={this.updatePassword} helperText="Minimum 8 chars, max 25." />
        <Recaptcha />
        <button type="submit" className="btn btn--main font-weight-bold">Create Account</button>
        { registrationErrors && (
          <ErrorMessage>
            {registrationErrors}
          </ErrorMessage>
        )}
      </form>
    );
  }
}

LocalRegistrationEmployer.propTypes = {
  register: React.PropTypes.func.isRequired,
  registrationErrors: React.PropTypes.string,
};

export default LocalRegistrationEmployer;
