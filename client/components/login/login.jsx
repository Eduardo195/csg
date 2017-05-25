import React from 'react';
import Link from 'components/link/link';
import Button from 'components/button/button';
import ErrorMessage from 'components/messages/error';
import EmailInput from 'components/input/containers/emailInput';
import PasswordInput from 'components/input/containers/passwordInput';
import { assign } from 'lodash';

class Login extends React.Component {

  constructor() {
    super();

    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.updateEmail = (isValid, value) => {
      this.updateState({ email: isValid ? value : null, error: null });
    };

    this.updatePassword = (isValid, value) => {
      this.updateState({ pwd: isValid ? value : null, error: null });
    };
  }

  updateState(stateUpdate) {
    this.setState(assign({}, this.state, stateUpdate));
  }

  componentWillUnmount() {
    this.props.handleUnmount();
  }

  onSubmit(e) {
    e.preventDefault();
    if(!this.state.email || !this.state.pwd) {
      this.updateState({ error: 'Missing credentials'})
      return false;
    }
    if(this.state.error) {
      this.updateState({ error: null})
    }

    this.props.login(this.state.email, this.state.pwd);
  }

  render() {
    const { error: propsError } = this.props;
    const { error: stateError } = this.state;
    const error = stateError || propsError;

    return (
      <div className="loginForm align-self-center d-flex flex-column justify-content-center">
        <h1 className="text-uppercase title text-center spaced">Login to your account</h1>
        <form onSubmit={this.onSubmit} className="text-center" >
          <EmailInput id="email" onChange={this.updateEmail} />
          <PasswordInput id="pass" onChange={this.updatePassword} />
          <small>
            <Link href="/password/reset">Forgot your password?</Link>
          </small>
          <div className="form-group input-group-lg">
            <Button type="submit" className="bold btn--main text-lowercase">Login</Button>
          </div>
        </form>
        { error ? (<ErrorMessage> { error } </ErrorMessage>) : null }
      </div>
    );
  }
}

Login.propTypes = {
  error: React.PropTypes.string,
  login: React.PropTypes.func.isRequired,
  handleUnmount: React.PropTypes.func.isRequired,
};

export default Login;
