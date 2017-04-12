import React from 'react';

class SelfValidatingInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: null, value: props.initialValue || '' };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getRef = (ref) => { this.elem = ref; };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: newProps.initialValue,
      });
      this.props.onChange(true, newProps.initialValue);
    }
  }

  onChange(e) {
    this.setState({ value: e.target.value });
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
    this.setState(Object.assign({}, this.state, { error }));
  }

  render() {
    const { error, value } = this.state;
    const { id, type, placeholder, helperText, srLabel, showLabel, labelCls } = this.props;
    return (
      <div className={`form-group input-group-lg ${error ? 'has-danger' : ''}`}>
        <label htmlFor={`ac_${id}`} className={showLabel ? labelCls : 'sr-only'}>{srLabel}</label>
        <input
          value={value} id={`ac_${id}`}
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
  validate: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  srLabel: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  initialValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  helperText: React.PropTypes.string,
  showLabel: React.PropTypes.bool,
  labelCls: React.PropTypes.string,
};

SelfValidatingInput.defaultProps = {
  type: 'text',
  showLabel: false,
  helperText: null,
  placeholder: null,
  labelCls: '',
};


export default SelfValidatingInput;
