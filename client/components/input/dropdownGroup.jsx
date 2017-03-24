import React from 'react';

function getSelectedLabel(options, selectedValue) {
  for (let i = 0; i < options.length; i++) {
    if (options[i].value == selectedValue) {  // eslint-disable-line eqeqeq
      return options[i].label;
    }
  }
  return null;
}

class DropdownGroup extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { id, options, selected } = this.props;

    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle" type="button" id={`dd_${id}`}
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
        >
          {getSelectedLabel(options, selected)}
        </button>
        <div className="dropdown-menu" aria-labelledby={`dd_${id}`}>
          {
            options.map(option => (
              <button
                className="dropdown-item" type="button" key={option.value} onClick={this.handleChange}
                value={option.value} data-value={option.value}
              >
                {option.label}
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

DropdownGroup.propTypes = {
  id: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  selected: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default DropdownGroup;
