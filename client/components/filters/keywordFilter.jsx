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
    const { className } = this.props;
    return (
      <div className={`keywordFilter input-group ${className || ''}`}>
        <input ref={this.getRef} type="text" className="form-control" placeholder="Keyword" onKeyPress={this.onKeyPress} />
        <span className="input-group-btn">
          <button onClick={this.onAdd} className="btn btn-secondary" type="button">+</button>
        </span>
      </div>
    );
  }
}

KeywordFilter.propTypes = {
  handleAdd: React.PropTypes.func.isRequired,
  className: React.PropTypes.string,
};

export default KeywordFilter;
1;
