import React from 'react';
import NameInput from 'components/input/containers/nameInput';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';

class Personal extends React.Component {
  constructor() {
    super();
    this.state = { name: { }, surname: { } };
    this.onSubmit = this.onSubmit.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.setName = this.setName.bind(this);
    this.setSurname = this.setSurname.bind(this);
  }

  componentWillUnmount() {
    this.props.handleUnmount();
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.canSubmit()) {
      this.props.handleSubmit(this.state);
    }
  }

  setName(isValid, value) {
    this.updateState({ name: { isValid, value } });
  }

  setSurname(isValid, value) {
    this.updateState({ surname: { isValid, value } });
  }

  canSubmit() {
    return this.props.isLoading ||
      (this.state.name.isValid && this.state.name.value !== this.props.name) ||
      (this.state.surname.isValid && this.state.surname.value !== this.props.surname);
  }

  updateState(prop) {
    this.setState(Object.assign({}, this.state, prop));
  }

  render() {
    const { name, surname, isLoading, error, success } = this.props;
    return (
      <section>
        <h1 className="title sectionTitle text-uppercase">About you</h1>
        <h6 className="text-uppercase">As shown on your applications</h6>
        <form onSubmit={this.onSubmit}>
          <NameInput id="name" initialValue={name} placeholder="Name" srLabel="Name" showLabel onChange={this.setName} />
          <NameInput id="sname" initialValue={surname} placeholder="Surname" srLabel="Surname" showLabel onChange={this.setSurname} />
          <div>
            <button disabled={!this.canSubmit()} type="submit" className="btn btn--main font-weight-bold text-lowercase"> { isLoading ? 'Loading...' : 'Save' }</button>
          </div>
        </form>
        { error && (<ErrorMessage> { error } </ErrorMessage>) }
        { success && (<SuccessMessage>updated</SuccessMessage>) }
      </section>
    );
  }
}

Personal.propTypes = {
  handleUnmount: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  name: React.PropTypes.string,
  surname: React.PropTypes.string,
  error: React.PropTypes.string,
  success: React.PropTypes.bool,
  isLoading: React.PropTypes.bool.isRequired,
};

export default Personal;
