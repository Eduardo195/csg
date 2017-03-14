import React from 'react';
import Button from 'components/button/button';
import Logo from 'components/header/logo';
import SideImageLayout from 'components/layouts/sideImageLayout';
import ErrorMessage from 'components/errorMessage/errorMessage';

class Registration extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.getEmailRef = (ref) => { this.email = ref; };
        this.getPwdRef = (ref) => { this.pwd = ref; };
        this.getPwdConfRef = (ref) => { this.pwdConf = ref; };
    }

    handleSubmit() {
        this.props.register(this.email.value, this.pwd.value);
    }

    render() {
        const { submissionErrors, validationErrors } = this.props;
        const { email: emailError, password: pwdError } = validationErrors || {};

        return (
          <SideImageLayout className="registration">
            <div className="flex flex--col">
              <div><Logo /></div>
              <h2 className="title">Register with</h2>
              <br />
              <div className="options">
                <button className="btn">Facebook</button>
                <button className="btn">Google+</button>
                <button className="btn">LinkdIn</button>
              </div>
              <br />
              <p>Or</p>
              <form onSubmit={this.handleSubmit}>
                <div className={`form-group input-group-lg ${emailError ? 'has-danger' : ''}`}>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    ref={this.getEmailRef} type="email"
                    className={`form-control ${emailError ? 'form-control-danger' : ''}`} type="email"
                    aria-describedby="emailHelp" placeholder="Enter email"
                  />
                  { emailError ? (<div className="form-control-feedback">{emailError}</div>) : null }
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className={`form-group input-group-lg ${pwdError ? 'has-danger' : ''}`}>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    ref={this.getPwdRef} type="password"
                    className={`form-control ${pwdError ? 'form-control-danger' : ''}`}
                    aria-describedby="pwdHelp" id="password" placeholder="Password"
                  />
                  { pwdError ? (<div className="form-control-feedback">{pwdError}</div>) : null }
                  <small id="pwdHelp" className="form-text text-muted">Minimum 8 chars, max 25</small>
                </div>
                <button type="submit" className="btn btn--main font-weight-bold">Create Account</button>
              </form>
              { submissionErrors && <ErrorMessage msg={submissionErrors} />}
            </div>
          </SideImageLayout>
        );
    }
}

Registration.propTypes = {
    register: React.PropTypes.func.isRequired,
    submissionErrors: React.PropTypes.string,
    validationErrors: React.PropTypes.object,
};

export default Registration;
