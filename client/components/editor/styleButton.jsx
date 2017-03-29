import React from 'react';

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onClick = () => {
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'btn';
    if (this.props.active) {
      className += ' btn--main';
    }
    return (
      <button className={className} onClick={this.onClick}>
        {this.props.label}
      </button>
    );
  }
}

StyleButton.propTypes = {
  active: React.PropTypes.bool.isRequired,
  style: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

export default StyleButton;
