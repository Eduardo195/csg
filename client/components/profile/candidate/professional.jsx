import React from 'react';
import TextInput from 'components/input/containers/textInput';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';

import KeywordFilter from 'components/filters/containers/keywordFilter';
import KeywordList from 'components/filters/containers/keywordList';

class Professional extends React.Component {
  constructor() {
    super();
    this.state = { yearsXp: {} };
    this.onSubmit = this.onSubmit.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.setYearsXp = this.setYearsXp.bind(this);
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

  setYearsXp(isValid, value) {
    this.updateState({ yearsXp: { isValid, value: +value } });
  }

  updateState(prop) {
    this.setState(Object.assign({}, this.state, prop));
  }

  canSubmit() {
    return this.props.isLoading ||
      (this.state.yearsXp.isValid && this.state.yearsXp.value !== this.props.yearsXp);
  }

  render() {
    const { yearsXp, isLoading, error, success } = this.props;

    return (
      <section>
        <h1 className="title sectionTitle text-uppercase">About your work</h1>
        <h6 className="text-uppercase">These details help us find tailored opportunities for you</h6>
        <form onSubmit={this.onSubmit}>
          <TextInput
            id="yearsXparsExperience"
            initialValue={yearsXp} type="number"
            placeholder="Years experience" showLabel srLabel="Years eperience in your field"
            onChange={this.setYearsXp}
          />
          <div className="form-group">
            <label>Industries you have experience in</label>
            <KeywordFilter className="input-group-lg" />
            <KeywordList />
          </div>
          <div className="form-group">
            <label>Keywords</label>
            <KeywordFilter className="input-group-lg" />
            <KeywordList />
          </div>
          <div>
            <button disabled={!this.canSubmit()} type="submit" className="btn btn--main font-weight-bold text-lowercase"> { isLoading ? 'Loading...' : 'Save' }</button>
          </div>
          { error && (<ErrorMessage> { error } </ErrorMessage>) }
          { success && (<SuccessMessage>updated</SuccessMessage>) }
        </form>
      </section>
    );
  }
}

Professional.propTypes = {
  handleUnmount: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  success: React.PropTypes.bool,
  error: React.PropTypes.string,
  yearsXp: React.PropTypes.number,
};

export default Professional;
