/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';

class TextAutocomplete extends React.Component {

  constructor() {
    super();
    this.state = { value: '', isEditing: false };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getInputRef = (ref) => { this.input = ref; };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isEditing !== this.state.isEditing && this.state.isEditing) {
      this.input.focus();
    }
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.setEditMode(false);
    }
  }

  onChange(e) {
    this.props.onChange(e.target.value);
    this.setState({ isEditing: true });
  }

  onFocus() {
    this.setEditMode(true);
  }

  onBlur() {
    this.setEditMode(false);
  }

  setEditMode(isEditing) {
    this.setState({
      isEditing,
    });
  }

  render() {
    const { isEditing } = this.state;
    const { placeholder, type, value } = this.props;

    return isEditing ? (
      <input
        type={type} ref={this.getInputRef} value={value} placeholder={placeholder}
        onKeyPress={this.onKeyPress} onChange={this.onChange} onBlur={this.onBlur} className="editableTag"
      />
    ) : (
      <span onClick={this.onFocus} onFocus={this.onFocus}>
        {value || placeholder }
      </span>
    );
  }
}

TextAutocomplete.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  type: React.PropTypes.string,
};

TextAutocomplete.defaultProps = {
  type: 'text',
};

export default TextAutocomplete;
