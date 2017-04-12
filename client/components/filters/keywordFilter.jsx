import React from 'react';

class KeywordFilter extends React.Component {

  constructor() {
    super();
    this.getRef = (ref) => { this.inputRef = ref; };
    this.onAdd = this.onAdd.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.onAdd();
    }
  }
  onAdd() {
    if (this.inputRef.value) {
      this.props.handleAdd(this.inputRef.value);
      this.inputRef.value = '';
    }
    this.inputRef.focus();
  }

  render() {
    const { id, className, placeholder, showLabel, label } = this.props;

    return (
      <div className="keywordFilter form-group">
        <label htmlFor={`${id}_kwlist`} className={showLabel ? '' : 'sr-only'}> { label }</label>
        <div className={`input-group ${className}`}>
          <input id={`${id}_kwlist`} ref={this.getRef} type="text" className="form-control" placeholder={placeholder} onKeyPress={this.onKeyPress} />
          <span className="input-group-btn">
            <button onClick={this.onAdd} className="btn btn-secondary" type="button">+</button>
          </span>
        </div>
      </div>
    );
  }
}

KeywordFilter.propTypes = {
  handleAdd: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  showLabel: React.PropTypes.bool,
  label: React.PropTypes.string,

};

KeywordFilter.defaultProps = {
  className: '',
  placeholder: 'Keywords',
  showLabel: false,
  label: 'keywords',
};

export default KeywordFilter;
