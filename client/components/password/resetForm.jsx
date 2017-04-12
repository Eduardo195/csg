import React from 'react';
import EmailInput from 'components/input/containers/emailInput';
import PasswordInput from 'components/input/containers/passwordInput';
import SuccessMessage from 'components/messages/success';
import ErrorMessage from 'components/messages/error';

class ResetForm extends React.Component {

  constructor() {
    super();
    this.state = {};

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getPassConfRef = (ref) => { this.passconf = ref; };
  }

  onSubmit(e) {
    e.preventDefault(); // stop page reload
    if (this.state.email && this.state.password) {
      this.props.resetPassword(this.state.email, this.state.password, this.props.params.hash);
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
    const { success, error } = this.props;

    return (
      <form className="resetForm" onSubmit={this.onSubmit}>
        <h1 className="text-center">Change your password</h1>
        <div className="centered">
          <EmailInput id="email" onChange={this.updateEmail} />
          <PasswordInput id="pass" onChange={this.updatePassword}
            helperText="Minimum 8 chars, max 25." />
        </div>
        {
         !success && (
         <button type="submit" className="btn btn--main">
              Change
            </button>
          )
        }

        {
          error && (
            <ErrorMessage>
              { error }
            </ErrorMessage>
          )
        }

        {
          success && (
            <SuccessMessage>
              Password changed successfully!
            </SuccessMessage>
          )
        }
      </form>
    );
  }
}

ResetForm.propTypes = {
  params: React.PropTypes.shape({
    hash: React.PropTypes.string.isRequired,
  }),
  resetPassword: React.PropTypes.func.isRequired,
  success: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default ResetForm;
