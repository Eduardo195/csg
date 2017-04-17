import React from 'react';
import { Link as A } from 'react-router';

const Link = ({ href, children, target, className }) => {
  if (target) {
    return (<a href={href} target={target} rel="noopener noreferrer" className={className}>{children}</a>);
  }
  return (<A to={href} className={className}>{children}</A>);
};

Link.propTypes = {
  target: React.PropTypes.string,
  className: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ]).isRequired,
};

Link.defaultProps = {
  target: null,
};

export default Link;
