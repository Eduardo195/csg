import React from 'react';
import Button from 'components/button/button';

class Reset extends React.Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.getEmailRef = (ref) => { this.email = ref; };
  }

  onSubmit() {
    this.props.requestPasswordReset(this.email.value);
  }

  render() {
    return (
      <div className="loginForm">
        <h1 className="text-center">Reset your password</h1>
        <div className="centered">
          <input ref={this.getEmailRef} type="email" placeholder="Email" />
        </div>
        <div className="centered">
          <Button onTap={this.onSubmit}>Reset</Button>
        </div>
      </div>
    );
  }
}

Reset.propTypes = {
  requestPasswordReset: React.PropTypes.func.isRequired,
};

export default Reset;
