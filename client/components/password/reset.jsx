import React from 'react';
import EmailInput from 'components/input/containers/emailInput';
import SuccessMessage from 'components/messages/success';

class Reset extends React.Component {

  constructor() {
    super();
    this.state = { email: null };

    this.updateEmail = this.updateEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.getEmailRef = (ref) => { this.email = ref; };
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.email) {
      this.props.requestPasswordReset(this.state.email);
      this.setState({ sent: true, email: this.state.email });
    }
  }

  updateEmail(isValid, value) {
    if (isValid) {
      this.setState({
        email: isValid ? value : null,
      });
    }
  }

  render() {
    const { email, sent } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1 className="text-center">Reset your password</h1>
        <EmailInput id="email" onChange={this.updateEmail} />
        <div className="centered">
          {
            sent ? (
              <SuccessMessage>
                We&#39;ve sent an email to <strong>{email}</strong>.
              </SuccessMessage>
            ) : (
              <button type="submit" className="btn btn--main">Reset</button>
            )
          }
        </div>
      </form>
    );
  }
}

Reset.propTypes = {
  requestPasswordReset: React.PropTypes.func.isRequired,
};

export default Reset;
