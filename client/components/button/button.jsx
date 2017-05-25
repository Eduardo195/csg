import React from 'react';

function Button(props) {
  const { children, onTap, onBlur, onHover, className, dataValue } = props;
  return (
    <button
      onClick={onTap} onBlur={onBlur} onMouseEnter={onHover}
      data-value={dataValue}
      className={`btn ${className || ''}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.string,
    React.PropTypes.element,
  ]).isRequired,
  className: React.PropTypes.string,
  onBlur: React.PropTypes.func,
  onHover: React.PropTypes.func,
  onTap: React.PropTypes.func,   // submit buttons dont need an onTap
  dataValue: React.PropTypes.string, // for data-attr
};

export default Button;
