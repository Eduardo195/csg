import React from 'react';
import Link from 'components/link/link';

const Logo = props => (
  <Link href="/" className={props.className ? props.className : null}>
    <div className="d-inb logo">&nbsp;</div>
  </Link>
);

Logo.propTypes = {
  className: React.PropTypes.string,
};

export default Logo;
