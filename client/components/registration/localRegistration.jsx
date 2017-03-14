import React from 'react';
import ErrorMessage from 'components/errorMessage/errorMessage';

class LocalRegistration extends React.Component {
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
          <form onSubmit={this.handleSubmit}>
            <div className={`form-group input-group-lg ${emailError ? 'has-danger' : ''}`}>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                ref={this.getEmailRef} type="email" aria-describedby="emailHelp" placeholder="Enter email"
                className={`form-control ${emailError ? 'form-control-danger' : ''}`}
              />
              { emailError ? (<div className="form-control-feedback">{emailError}</div>) : null }
              <small id="emailHelp" className="form-text text-muted">
                We will never share your email with anyone else.
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
            { submissionErrors && <ErrorMessage msg={submissionErrors} />}
          </form>
        );
    }
}

LocalRegistration.propTypes = {
    register: React.PropTypes.func.isRequired,
    submissionErrors: React.PropTypes.string,
    validationErrors: React.PropTypes.object,
};

export default LocalRegistration;
