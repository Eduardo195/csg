import React from 'react';

function genId(name, index) {
  return `${name}_${index}`;
}

class CheckboxGroup extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.handleMount) {
      this.props.handleMount();
    }
  }

  handleChange(e) {
    this.props.handleChange(e.target.value, e.target.checked);
  }

  render() {
    const { items, selected, name } = this.props;
    return (
      <div className="checkboxGroup">
        {
          items.map((item, index) => (
            <div className="checkbox" key={item.value}>
              <label htmlFor={genId(name, index)}>
                <input onChange={this.handleChange} checked={selected.indexOf(item.value) >= 0} id={genId(name, index)} type="checkbox" value={item.value} />
                <span />
                {item.label}
              </label>
            </div>
          ))
        }
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  selected: React.PropTypes.array.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleMount: React.PropTypes.func,
};

export default CheckboxGroup;
