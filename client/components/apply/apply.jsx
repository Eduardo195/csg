import React from 'react';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';
import OpportunityService from 'services/opportunity/employer';
import RadioGroup from 'components/input/radioGroup';
import CvInput from 'components/input/containers/cvInput';
import { assign } from 'lodash';

const cvOptions = [
  { label: 'Use stored CV for application', value: 's' },
  // { label: 'Upload new CV and replace existing', value: 'n' },
]

const clOptions = [
  { label: 'Letter #1', value: '0' },
  { label: 'Letter #2', value: '1' },
  { label: 'Letter #3', value: '2' },
  // { label: 'Upload new Cover Letter and replace existing', value: 'n' },
]

class Apply extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedCvOption: cvOptions[0].value,
      selectedClOption: clOptions[0].value
    };
    this.getCvInputRef = (ref) => { this.cvInputRef = ref };
    this.getClInputRef = (ref) => { this.clFileInputRef = ref };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCvChange = (value, checked) => {
      this.updateState({ selectedCvOption: value })
      if(value === cvOptions[1].value) {
        this.cvInputRef.click();
      }
    };
    this.handleClChange = (value, checked) => {
      this.updateState({ selectedClOption: value })
    };
    this.handleCvSelection = (isValid, file) => {
      this.updateState({ cv: isValid ? file : null })
    };
  }

  componentDidMount() {
    if(!this.opportunity) {
      OpportunityService.getOne(this.props.params.id).then((rsp) => {
        this.updateState({ isLoading: false, error: rsp.msg, opportunity: rsp.opportunity });
      }).catch((err) => {
        this.updateState({ isLoading: false, error: err ? err.statusText : 'Unknown error' });
      });
    }
  }

  updateState(stateUpdate) {
    this.setState(assign({}, this.state, stateUpdate));
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const id = this.props.params.id;
    const { error, success } = this.props;
    const { selectedCvOption, selectedClOption } = this.state;

    const opportunity = this.state.opportunity || {};
    const locationLabel = opportunity.location ? opportunity.location.label : '';

    return (
      <div className="apply">
        <section className="short">
          <h3>{opportunity.title}</h3>
          {opportunity.company} | {locationLabel}
        </section>
        <h1 className="text-uppercase title text-center">Apply now</h1>
        <div>
          <section>
            <h2>Select CV</h2>
            <RadioGroup name="cv" items={cvOptions} selected={selectedCvOption} handleChange={this.handleCvChange} />
            <CvInput inputRef={this.getCvInputRef} handleChange={this.handleCvSelection} isDisabled={false} />
          </section>
          <section>
            <h2>Select Cover Letter</h2>
            <RadioGroup name="cl" items={clOptions} selected={selectedClOption} handleChange={this.handleClChange} />
          </section>

          <form onSubmit={this.onSubmit} className="form form-group">
            <button type="submit" className="btn btn--main">
              Submit application
            </button>
          </form>
          { success && (<SuccessMessage>{ success }</SuccessMessage>) }
          { error && (<ErrorMessage>{ error }</ErrorMessage>) }
        </div>
      </div>
    );
  }
}

Apply.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  success: React.PropTypes.number.isRequired,
  error: React.PropTypes.string.isRequired,
};

export default Apply;
