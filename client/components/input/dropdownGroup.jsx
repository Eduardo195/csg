import React from 'react';

function getSelectedLabel(options, selectedId) {
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedId) {
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
        const { options, selected } = this.props;

        if (!options) {
            return null;
        }

        return (
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {getSelectedLabel(options, selected)}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              {
                      options.map(option => (
                        <button
                          className="dropdown-item"
                          type="button"
                          key={option.value}
                          onClick={this.handleChange}
                          value={option.value}
                          data-value={option.value}
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
    options: React.PropTypes.array.isRequired,
    selected: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

export default DropdownGroup;
