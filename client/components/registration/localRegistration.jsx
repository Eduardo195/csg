import React from 'react';
import ErrorMessage from 'components/messages/error';
import Recaptcha from 'components/registration/containers/recaptcha';
import EmailInput from 'components/input/containers/emailInput';
import PasswordInput from 'components/input/containers/passwordInput';

class LocalRegistration extends React.Component {
  constructor() {
    super();
    this.state = { resetCaptchaTimestap: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.registrationErrors && !this.props.registrationErrors) {
      this.setState({ resetCaptchaTimestap: (this.state.resetCaptchaTimestap || 1) + 1 });
    }
  }

  componentWillUnmount() {
    this.props.handleUnmount();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.register(this.state.email, this.state.password);
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

  render() {
    const { registrationErrors } = this.props;
    const { resetCaptchaTimestap } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <EmailInput id="email" onChange={this.updateEmail} />
        <PasswordInput id="pass" onChange={this.updatePassword} helperText="Minimum 8 chars, max 25." />
        <Recaptcha resetTimestamp={resetCaptchaTimestap} />
        <button type="submit" className="btn btn--main font-weight-bold text-lowercase">Create</button>
        { registrationErrors && (
          <ErrorMessage>
            {registrationErrors}
          </ErrorMessage>
        )}
      </form>
    );
  }
}

LocalRegistration.propTypes = {
  handleUnmount: React.PropTypes.func.isRequired,
  registrationErrors: React.PropTypes.string,
  register: React.PropTypes.func.isRequired,
};

export default LocalRegistration;
