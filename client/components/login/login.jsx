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
      <div className="loginForm align-self-center d-flex flex-column justify-content-center">
        <h1 className="text-uppercase title text-center spaced">Login to your account</h1>
        <div className="text-center">
          <input ref={this.getEmailRef} type="email" placeholder="Username / Email" />
        </div>
        <div className="text-center" >
          <input ref={this.getPwdRef} type="password" placeholder="password" />
          <small>
            <Link href="/password/reset">Forgot your password?</Link>
          </small>
        </div>
        <div className="text-center">
          <Button onTap={this.onTapLogin} className="bold btn--main text-lowercase">Login</Button>
        </div>
        { error ? (<ErrorMessage> { error } </ErrorMessage>) : null }
        <hr className="hr-text" data-content="Or" />
        <div className="text-center">
          <button className="btn">L</button>
          <button className="btn">F</button>
          <button className="btn">G+</button>
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
