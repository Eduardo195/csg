import React from 'react';

function genId(name, index) {
  return `${name}_${index}`;
}

class RadioGroup extends React.Component {

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
    this.props.handleChange(e.target.getAttribute('data-v'));
  }

  render() {
    const { items, selected, name } = this.props;
    return (
      <div className="radioGroup">
        {
          items.map((item, index) => (
            <div key={item.value} data-v={item.value}
              className={`radio ${selected === item.value ? 'active' : ''}`}
              onClick={this.handleChange}>
              {item.label}
            </div>
          ))
        }
      </div>
    );
  }
}

RadioGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  selected: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleMount: React.PropTypes.func,
};

export default RadioGroup;
