import React from 'react';
import moment from 'moment';
import Editor from 'components/editor/editor';
import EditableTag from 'components/input/editableTag';
import DropdownGroup from 'components/input/dropdownGroup';
import ErrorMessage from 'components/messages/error';

const bodyPlc = 'Enter some text';

function getData({ title, date, body, employerName, location, contractType, pay }) {
  return {
    opportunity: {
      pay,
      date,
      title,
      body,
      employerName,
      location: location.index,
      contractType: contractType.index,
    },
  };
}

class Create extends React.Component {
  constructor(props) {
    super();
    this.state = props.opportunity ? getData(props.opportunity) : {};
    this.getTextAreaRef = (ref) => { this.textarea = ref; };
    this.togglePreview = this.togglePreview.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onMinPayChange = this.onMinPayChange.bind(this);
    this.onMaxPayChange = this.onMaxPayChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onContracTypeChange = this.onContracTypeChange.bind(this);
  }

  onSubmit() {
    this.props.onSubmit(this.state.opportunity);
  }

  onTitleChange(title) {
    this.updateOpportunity({ title });
  }

  onBodyChange(body) {
    this.updateOpportunity({ body });
  }

  onLocationChange(location) {
    this.updateOpportunity({ location });
  }

  onContracTypeChange(contractType) {
    this.updateOpportunity({ contractType });
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

  getDropdownDefault(propName, dataSource) {
    if (this.state.opportunity[propName]) {
      return this.state.opportunity[propName];
    } else if (this.props.opportunity[dataSource].length > 0) {
      return this.props.opportunity[dataSource][0].value;
    }
    return null;
  }

  getSelectedContractType() {
    return this.getDropdownDefault('contractType', 'contractTypes');
  }

  getSelectedLocation() {
    return this.getDropdownDefault('location', 'locations');
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

    return (
      <div className="op">
        <h1 className="title">
          <EditableTag value={title} onChange={this.onTitleChange} placeholder="Procuramos [profissao] em [localidade]" />
        </h1>
        <div className="mainWrapper d-flex flex-wrap">
          <div className="detais align-self-stretch">
            <div className="contentWrapper">
              <div className="content" dangerouslySetInnerHTML={isPreview ? { __html: body } : null}>
                {
                  isPreview ? null : (
                    <Editor value={body} placeholder={bodyPlc} onChange={this.onBodyChange} />
                  )
                }
              </div>
            </div>
          </div>
          <div className="overview align-self-stretch">
            <div className="contentWrapper">
              <h4>Employer</h4>
              <span>{employerName || 'NOT SET'}</span>
              <h4>Location</h4>
              <span>
                <DropdownGroup value={location} id="locations" onChange={this.onLocationChange} options={this.props.locations} selected={this.getSelectedLocation()} />
              </span>
              <h4>Contract type</h4>
              <span>
                <DropdownGroup value={contractType} id="contractTypes" onChange={this.onContracTypeChange} options={this.props.contractTypes} selected={this.getSelectedContractType()} />
              </span>
              <h4>Salary</h4>
              <span>
                <EditableTag value={pay && pay.min} id="minPay" type="number" onChange={this.onMinPayChange} placeholder="[Salario minimo]" />
              </span>
              to
              <span>
                <EditableTag value={pay && pay.max} id="maxPay" type="number" onChange={this.onMaxPayChange} placeholder="[Salario maximo]" />
              </span>
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

Create.propTypes = {
  error: React.PropTypes.string,
  opportunity: React.PropTypes.object,
  onSubmit: React.PropTypes.func.isRequired,
  locations: React.PropTypes.array.isRequired,
  contractTypes: React.PropTypes.array.isRequired,
};

export default Create;
