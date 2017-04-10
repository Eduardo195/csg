import React from 'react';
import TextInput from 'components/input/containers/textInput';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';

class Personal extends React.Component {
  constructor() {
    super();
    this.state = { name: null, surname: null };
    this.onSubmit = this.onSubmit.bind(this);
    this.setName = this.setName.bind(this);
    this.setSurname = this.setSurname.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.name !== this.props.name ||
        this.state.surname !== this.props.surname) {
      this.props.handleSubmit(this.state);
    }
  }

  setName(isValid, name) {
    this.updateState({ name: isValid ? name : null });
  }

  setSurname(isValid, surname) {
    this.updateState({ surname: isValid ? surname : null });
  }

  updateState(prop) {
    this.setState(Object.assign({}, this.state, prop));
  }

  render() {
    const { name, surname, isLoading, error, success } = this.props;
    return (
      <section>
        <h1 className="title sectionTitle text-uppercase">Personal</h1>
        <form onSubmit={this.onSubmit}>
          <TextInput id="name" initialValue={name} placeholder="Name" srLabel="Name" helperText="Visible to employers" onChange={this.setName} />
          <TextInput id="surname" initialValue={surname} placeholder="Surname" srLabel="Surname" helperText="Visible to employers" onChange={this.setSurname} />
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

Personal.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  name: React.PropTypes.string,
  surname: React.PropTypes.string,
  isLoading: React.PropTypes.bool.isRequired,
  success: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default Personal;
