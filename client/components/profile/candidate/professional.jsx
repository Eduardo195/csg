import React from 'react';
import TextInput from 'components/input/containers/textInput';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';
import { without, isEqual, assign } from 'lodash';
import KeywordFilter from 'components/filters/keywordFilter';
import KeywordList from 'components/filters/keywordList';

class Professional extends React.Component {
  constructor() {
    super();
    this.state = { yearsXp: {}, keywords: null };
    this.onSubmit = this.onSubmit.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.setYearsXp = this.setYearsXp.bind(this);
    this.addKeyword = this.addKeyword.bind(this);
    this.removeKeyword = this.removeKeyword.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.keywords !== this.props.keywords) {
      this.setKeywords(newProps.keywords);
    }
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

  setKeywords(keywords) {
    this.updateState({ keywords });
  }

  updateState(prop) {
    this.setState(assign({}, this.state, prop));
  }

  addKeyword(value) {
    if (this.state.keywords.indexOf(value) < 0) {
      this.updateState({ keywords: [...this.state.keywords, value] });
    }
  }

  removeKeyword(value) {
    this.updateState({ keywords: without(this.state.keywords, value) });
  }

  canSubmit() {
    return this.props.isLoading ||
      (this.state.yearsXp.isValid && this.state.yearsXp.value !== this.props.yearsXp) ||
      !isEqual(this.state.keywords, this.props.keywords);
  }

  render() {
    const { yearsXp, isLoading, error, success } = this.props;
    const { keywords } = this.state;

    return (
      <section>
        <h1 className="title sectionTitle text-uppercase">About your work</h1>
        <h6 className="text-uppercase">These details help us find tailored opportunities for you</h6>
        <form onSubmit={this.onSubmit}>
          <TextInput
            id="yearsXparsExperience"
            initialValue={yearsXp} type="number"
            placeholder="Years experience" showLabel label="Years eperience in your field"
            onChange={this.setYearsXp}
          />
          <div className="form-group">
            <KeywordFilter id="profileKw" className="input-group-lg" handleAdd={this.addKeyword} placeholder="Areas and techs" showLabel label="Areas and technologies you have experience in" />
            <KeywordList keywords={keywords} handleRemove={this.removeKeyword} />
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
  keywords: React.PropTypes.array,
};

export default Professional;
