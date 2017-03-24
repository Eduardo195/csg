import React from 'react';
import EditableTag from 'components/input/editableTag';
import MarkdownBox from 'components/opportunity/markdownBox';
import DropdownGroup from 'components/input/dropdownGroup';
import ErrorMessage from 'components/messages/error';
import moment from 'moment';

class Create extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onMarkdownChange = this.onMarkdownChange.bind(this);
    this.onMinSalaryChange = this.onMinSalaryChange.bind(this);
    this.onMaxSalaryChange = this.onMaxSalaryChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onContracTypeChange = this.onContracTypeChange.bind(this);
  }

  onSubmit() {
    // TODO: error messages
    // if (!this.state.title || !this.state.markdown) {
    //   this.updateState({ error: 'Incomplete details' });
    // } else {
    this.props.onSubmit(this.state);
    // }
  }

  onTitleChange(title) {
    this.updateState({ title });
  }

  onMarkdownChange(markdown) {
    this.updateState({ markdown });
  }

  onMinSalaryChange(salaryMin) {
    this.updateState({ salaryMin });
  }

  onMaxSalaryChange(salaryMax) {
    this.updateState({ salaryMax });
  }

  onLocationChange(selectedValue) {
    this.updateState({ location: selectedValue });
  }

  onContracTypeChange(selectedValue) {
    this.updateState({ contractType: selectedValue });
  }

  getDropdownDefault(propName, dataSource) {
    if (this.state[propName]) {
      return this.state[propName];
    } else if (this.props[dataSource].length > 0) {
      return this.props[dataSource][0].value;
    }
    return null;
  }

  getSelectedContractType() {
    return this.getDropdownDefault('contractType', 'contractTypes');
  }

  getSelectedLocation() {
    return this.getDropdownDefault('location', 'locations');
  }

  updateState(obj) {
    this.setState(Object.assign({}, this.state, obj));
  }

  render() {
    return (
      <div className="op">
        <h1 className="title">
          <EditableTag onChange={this.onTitleChange} placeholder="Procuramos [profissao] em [localidade]" />
        </h1>
        <div className="mainWrapper">
          <div className="detais">
            <div className="contentWrapper">
              <div className="content">
                <MarkdownBox onChange={this.onMarkdownChange} />
              </div>
            </div>
          </div>
          <div className="overview">
            <div className="contentWrapper">
              <h4>Employer</h4>
              <span>{'Pre-filled'}</span>
              <h4>Location</h4>
              <span>
                <DropdownGroup id="locations" onChange={this.onLocationChange} options={this.props.locations} selected={this.getSelectedLocation()} />
              </span>
              <h4>Contract type</h4>
              <span>
                <DropdownGroup id="locations" onChange={this.onContracTypeChange} options={this.props.contractTypes} selected={this.getSelectedContractType()} />
              </span>
              <h4>Salary</h4>
              <span>
                <EditableTag onChange={this.onMinSalaryChange} placeholder="[Salario minimo]" />
              </span>
              to
              <span>
                <EditableTag onChange={this.onMaxSalaryChange} placeholder="[Salario maximo]" />
              </span>
              <h4>Posted</h4>
              <span>{ moment().format('dddd, MMMM Do YYYY, H:mm') }</span>
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
          Post
        </button>
      </div>
    );
  }
}

Create.propTypes = {
  error: React.PropTypes.string,
  onSubmit: React.PropTypes.func.isRequired,
  locations: React.PropTypes.array.isRequired,
  contractTypes: React.PropTypes.array.isRequired,

};

export default Create;
