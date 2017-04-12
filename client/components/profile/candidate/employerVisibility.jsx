import React from 'react';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';
import { assign } from 'lodash';

class EmployerVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: props.isVisible || null };
    this.setVisibility = this.setVisibility.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isVisible !== this.props.isVisible) {
      this.updateState({ isVisible: newProps.isVisible });
    }
  }

  componentWillUnmount() {
    this.props.handleUnmount();
  }

  setVisibility() {
    if (this.canSubmit()) {
      const isVisible = !this.state.isVisible;
      this.props.handleSubmit(isVisible);
      this.updateState({ isVisible });
    }
  }

  updateState(prop) {
    this.setState(assign({}, this.state, prop));
  }

  canSubmit() {
    return !this.props.isLoading;
  }

  render() {
    const { isLoading, error, success } = this.props;
    const { isVisible } = this.state;
    let label = isVisible ? 'Yes' : 'No';

    if (isLoading) {
      label = 'Loading..';
    }

    return (
      <section>
        <h1 className="title sectionTitle text-uppercase">Profile visibility</h1>
        <h6 className="text-uppercase">Do you want employers to be able to find and contact you?</h6>
        <button
          disabled={this.isLoading} onClick={this.setVisibility} aria-pressed={isVisible}
          className={`btn btn--toggle ${isVisible ? 'active' : ''}`}
        >
          { label }
        </button>
        { error && (<ErrorMessage> { error } </ErrorMessage>) }
        { success && (<SuccessMessage>updated</SuccessMessage>) }
      </section>
    );
  }
}

EmployerVisibility.propTypes = {
  handleUnmount: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  isVisible: React.PropTypes.bool,
  success: React.PropTypes.string,
  error: React.PropTypes.string,
};

export default EmployerVisibility;
