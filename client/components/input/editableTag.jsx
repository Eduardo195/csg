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
    this.setState({
      value: e.target.value,
      isEditing: true,
    });
  }

  onFocus() {
    this.setEditMode(true);
  }

  onBlur() {
    this.setEditMode(false);
  }

  setEditMode(isEditing) {
    this.setState({
      value: this.state.value,
      isEditing,
    });
  }

  render() {
    const { value, isEditing } = this.state;
    const { placeholder } = this.props;

    return isEditing ? (
      <input
        ref={this.getInputRef} value={value} type="text" placeholder={placeholder}
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
};

export default TextAutocomplete;
