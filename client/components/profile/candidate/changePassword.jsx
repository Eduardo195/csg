import React from 'react';
import PasswordInput from 'components/input/containers/passwordInput';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';

class ChangePassword extends React.Component {
  constructor() {
    super();
    this.state = { };
    this.onSubmit = this.onSubmit.bind(this);
    this.setNewPwd = this.setNewPwd.bind(this);
    this.setNewPwdConf = this.setNewPwdConf.bind(this);
    this.setCurrentPwd = this.setCurrentPwd.bind(this);
  }

  componentWillUnmount() {
    this.props.handleUnmount();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  setCurrentPwd(isValid, pwd) {
    this.updateState({ pwd: isValid ? pwd : null });
  }

  setNewPwd(isValid, newPwd) {
    this.updateState({ newPwd: isValid ? newPwd : null });
  }

  setNewPwdConf(isValid, newPwdConf) {
    this.updateState({ newPwdConf: isValid ? newPwdConf : null });
  }

  updateState(prop) {
    this.setState(Object.assign({}, this.state, prop));
  }

  render() {
    const { isLoading, error, success } = this.props;
    return (
      <section>
        <h1 className="title sectionTitle text-uppercase">Change your password</h1>
        <h6> Min 8 chars, max 25, a number, hair of a witch and the blood of a virgin.</h6>
        <form onSubmit={this.onSubmit}>
          <div>
            <PasswordInput id="currentPwd" initialValue={name} type="password" placeholder="Current password" showLabel srLabel="Current password" onChange={this.setPwd} />
          </div>
          <div>
            <PasswordInput id="newPwd" initialValue={name} type="password" placeholder="New Password" showLabel srLabel="New Password" onChange={this.newPwd} />
            <PasswordInput id="pwdConf" initialValue={name} type="password" placeholder="Confirm New Password" showLabel srLabel="Confirm New Password" onChange={this.setNewPwdConf} />
          </div>
          <div>
            <button type="submit" disabled={isLoading} className="btn btn--main font-weight-bold text-lowercase"> { isLoading ? 'Loading...' : 'Save' }</button>
          </div>
        </form>
        { error && (<ErrorMessage> { error } </ErrorMessage>) }
        { success && (<SuccessMessage>updated</SuccessMessage>) }
      </section>
    );
  }
}

ChangePassword.propTypes = {
  handleUnmount: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  success: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default ChangePassword;
