import React from 'react';

function Button(props) {
  const { children, onTap, onBlur, onHover, className } = props;
  return (
    <button onClick={onTap} onBlur={onBlur} className={`btn ${className}`} onMouseEnter={onHover}>
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
  onTap: React.PropTypes.func.isRequired,
};

export default Button;
