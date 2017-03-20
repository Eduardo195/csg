import React from 'react';
import Link from 'components/link/link';
import Button from 'components/button/button';
import ErrorMessage from 'components/messages/error';

class Login extends React.Component {

  constructor() {
    super();
    this.onTapLogin = this.onTapLogin.bind(this);
    this.getEmailRef = (ref) => { this.email = ref; };
    this.getPwdRef = (ref) => { this.pwd = ref; };
  }

  onTapLogin() {
    this.props.login(this.email.value, this.pwd.value);
  }

  render() {
    const { error } = this.props;
    return (
      <div className="loginForm">
        <h1 className="text-center">Login to your account</h1>
        <div className="centered">
          <input ref={this.getEmailRef} type="email" placeholder="Username / Email" />
        </div>
        <div className="centered" >
          <input ref={this.getPwdRef} type="password" placeholder="password" />
          <small>
            <Link href="/password/reset">Forgot your password?</Link>
          </small>
        </div>
        <div className="centered">
          <Button onTap={this.onTapLogin}>Login</Button>
        </div>
        { error ? (<ErrorMessage> { error } </ErrorMessage>) : null }
        <hr className="hr-text" data-content="Or" />
        <div className="text-center">
          <Button>L</Button>
          <Button>F</Button>
          <Button>G+</Button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  error: React.PropTypes.string,
  login: React.PropTypes.func.isRequired,
};

export default Login;
