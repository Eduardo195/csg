import React from 'react';
import { Link as A } from 'react-router';

const Link = ({ href, children, className }) => (
  <A to={href} className={className}>{children}</A>
);

Link.propTypes = {
  className: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ]).isRequired,
};


export default Link;
