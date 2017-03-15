import React from 'react';

class KeywordFilter extends React.Component {

  constructor() {
    super();
    this.getRef = (ref) => { this.inputRef = ref; };
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    if (this.inputRef.value) {
      this.props.handleAdd(this.inputRef.value);
      this.inputRef.value = '';
    }
  }

  render() {
    return (
      <div className="keywordFilter input-group">
        <input ref={this.getRef} type="text" className="form-control" placeholder="Keyword" />
        <span className="input-group-btn">
          <button onClick={this.onAdd} className="btn btn-secondary" type="button">+</button>
        </span>
      </div>
    );
  }
}

KeywordFilter.propTypes = {
  handleAdd: React.PropTypes.func.isRequired,
};

export default KeywordFilter;
