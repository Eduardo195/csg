import React from 'react';
import Button from 'components/button/button';

class ResetForm extends React.Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.getEmailRef = (ref) => { this.email = ref; };
    this.getPassRef = (ref) => { this.pass = ref; };
    this.getPassConfRef = (ref) => { this.passconf = ref; };
  }

  onSubmit(e) {
    e.preventDefault(); // stop page reload
    this.props.resetPassword(this.email.value, this.pass.value, this.props.params.hash);
  }

  render() {
    return (
      <form className="resetForm" onSubmit={this.onSubmit}>
        <h1 className="text-center">Change your password</h1>
        <div className="centered">
          <input ref={this.getEmailRef} type="email" placeholder="Email" />
        </div>
        <div className="centered">
          <input ref={this.getPassRef} type="password" placeholder="Password" />
        </div>
        <div className="centered">
          <input ref={this.getPassConfRef} type="password" placeholder="Confirm Password" />
        </div>
        <div className="centered">
          <Button onTap={this.onSubmit}>Reset</Button>
        </div>
      </form>
    );
  }
}

ResetForm.propTypes = {
  params: React.PropTypes.shape({
    hash: React.PropTypes.string.isRequired,
  }),
  resetPassword: React.PropTypes.func.isRequired,
};

export default ResetForm;
