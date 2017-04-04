import React from 'react';
import moment from 'moment';
import Editor from 'components/editor/editor';
import EditableTag from 'components/input/editableTag';
import DropdownGroup from 'components/input/dropdownGroup';
import ErrorMessage from 'components/messages/error';
import ContractTypes from 'contractTypes';
import Districts from 'districts';
import Opportunity from './opportunity';

const bodyPlc = 'Enter some text';
const opportunityPlaceholder = {
  title: '',
  location: Districts[0],
  contractType: ContractTypes[0],
  body: 'Opportunity body',
  pay: {
    min: 10, max: 20,
  },
};

function getIntialState(opportunity) {
  return {
    isPreview: false,
    opportunity: opportunity || opportunityPlaceholder,
  };
}

class EditableOpportunity extends React.Component {
  constructor(props) {
    super();
    this.state = getIntialState(props.opportunity);
    this.togglePreview = this.togglePreview.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onMinPayChange = this.onMinPayChange.bind(this);
    this.onMaxPayChange = this.onMaxPayChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onContracTypeChange = this.onContracTypeChange.bind(this);
  }

  onSubmit() {
    const opportunity = Object.assign({}, this.state.opportunity);
    if (this.state.opportunity.location) {
      opportunity.location = this.state.opportunity.location.id;
    }
    if (this.state.opportunity.contractType) {
      opportunity.contractType = this.state.opportunity.contractType.id;
    }
    this.props.onSubmit(opportunity);
  }

  onTitleChange(title) {
    this.updateOpportunity({ title });
  }

  onBodyChange(body) {
    this.updateOpportunity({ body });
  }

  onLocationChange(locationId) {
    this.updateOpportunity({ location: Districts[locationId] });
  }

  onContracTypeChange(contractTypeId) {
    this.updateOpportunity({ contractType: ContractTypes[contractTypeId] });
  }

  onMinPayChange(min) {
    this.updateOpportunity({
      pay: Object.assign({}, this.state.opportunity.pay, { min }),
    });
  }

  onMaxPayChange(max) {
    this.updateOpportunity({
      pay: Object.assign({}, this.state.opportunity.pay, { max }),
    });
  }

  getSelectedContractType() {
    return this.state.opportunity.contractType.id;
  }

  getSelectedLocation() {
    return this.state.opportunity.location.id;
  }

  togglePreview() {
    this.setState(Object.assign({}, this.state, { isPreview: !this.state.isPreview }));
  }

  updateOpportunity(obj) {
    this.setState(
      Object.assign({}, this.state, {
        opportunity: Object.assign({}, this.state.opportunity, obj),
      }),
    );
  }

  render() {
    const { isPreview, opportunity } = this.state;
    const { title, body, location, contractType, date, pay, employerName } = opportunity;

    if (isPreview) {
      return (
        <div>
          <Opportunity opportunity={opportunity} />
          <button className="btn btn--main" onClick={this.togglePreview}>
            Preview
          </button>
        </div>
      );
    }

    return (
      <div className="op">
        <h1 className="title">
          <EditableTag value={title} onChange={this.onTitleChange} placeholder="[Title goes here]" />
        </h1>
        <div className="mainWrapper d-flex flex-wrap">
          <div className="detais align-self-stretch">
            <div className="contentWrapper">
              <div className="content">
                <Editor value={body} placeholder={bodyPlc} onChange={this.onBodyChange} />
              </div>
            </div>
          </div>
          <div className="overview align-self-stretch">
            <div className="contentWrapper">
              <h4>Employer</h4>
              <span>{employerName || 'NOT SET'}</span>
              <h4>Location</h4>
              <span>
                <DropdownGroup
                  value={location.id} id="locations"
                  onChange={this.onLocationChange}
                  options={Districts}
                  selected={this.getSelectedLocation()}
                />
              </span>
              <h4>Contract type</h4>
              <span>
                <DropdownGroup
                  value={contractType.id} id="contractTypes"
                  onChange={this.onContracTypeChange}
                  options={ContractTypes}
                  selected={this.getSelectedContractType()}
                />
              </span>
              <h4>Salary</h4>
              <span>
                <EditableTag value={pay && pay.min} id="minPay" type="number" onChange={this.onMinPayChange} placeholder="[Salario minimo]" />
              </span>
              &nbsp;to
              <EditableTag value={pay && pay.max} id="maxPay" type="number" onChange={this.onMaxPayChange} placeholder="[Salario maximo]" />
              <h4>Posted</h4>
              <span>{ moment(date || undefined).format('dddd, MMMM Do YYYY, H:mm') }</span>
              <h4>Industry</h4>
              <span>TODO</span>
            </div>
          </div>
        </div>
        { (this.state.error || this.props.error) && (
          <ErrorMessage>
            { this.state.error || this.props.error }
          </ErrorMessage>
        )}
        <button className="btn btn--main" onClick={this.onSubmit}>
          Publish
        </button>
        <button className="btn btn--main" onClick={this.togglePreview}>
          Preview
        </button>
      </div>
    );
  }
}

EditableOpportunity.propTypes = {
  error: React.PropTypes.string,
  opportunity: React.PropTypes.object,
  onSubmit: React.PropTypes.func.isRequired,
};

export default EditableOpportunity;
