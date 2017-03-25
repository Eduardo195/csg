import React from 'react';
import Link from 'components/link/link';

function NavDropdown(props) {
  const { item } = props;

  return (
    <li className="nav-item dropdown">
      <span
        className="nav-link dropdown-toggle" id={`${item.label.trim()}_nav_dd`}
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      >
        { item.label }
      </span>
      <div className="dropdown-menu" aria-labelledby={`${item.label.trim()}_nav_dd`}>
        {
            item.items.map(i => (
              <Link key={i.label} className="dropdown-item" href={i.href}>{i.label}</Link>))
          }
      </div>
    </li>
  );
}

NavDropdown.propTypes = {
  item: React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired,
  }).isRequired,
};

export default NavDropdown;
