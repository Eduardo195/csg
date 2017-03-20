import React from 'react';

class SelfValidatingInput extends React.Component {

  constructor() {
    super();
    this.state = { error: null };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.getRef = (ref) => { this.elem = ref; };
  }

  onChange() {
    if (this.state.error) {
      this.setState({
        error: null,
      });
    }
    const error = this.props.validate(this.elem.value);
    this.props.onChange(!error, this.elem.value);
  }

  onBlur() {
    if (!this.elem.value) {
      return;
    }
    const error = this.props.validate(this.elem.value);
    if (!error !== !this.state.error) {
      this.props.onChange(!error, this.elem.value);
    }
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { id, type, placeholder, helperText, srLabel } = this.props;
    return (
      <div className={`form-group input-group-lg ${error ? 'has-danger' : ''}`}>
        <label htmlFor="email" className="sr-only">{srLabel}</label>
        <input
          ref={this.getRef} type={type} aria-describedby={`${id}Help`}
          placeholder={placeholder} onBlur={this.onBlur} onChange={this.onChange}
          className={`form-control ${error ? 'form-control-danger' : ''}`}
        />
        { error ? (<div className="form-control-feedback">{error}</div>) : null }
        { helperText ? (
          <small id={`${id}Help`} className="form-text text-muted">
            { helperText }
          </small>
        ) : null }
      </div>
    );
  }
}

SelfValidatingInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  srLabel: React.PropTypes.string.isRequired,
  helperText: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  validate: React.PropTypes.func.isRequired,
};

export default SelfValidatingInput;
