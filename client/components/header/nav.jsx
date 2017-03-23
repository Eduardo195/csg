import React from 'react';
import Link from 'components/link/link';
import SecNav from 'components/header/containers/secNav';
import NavDropdown from './navDropdown';

const Nav = (props) => {
  const { navItems } = props;
  return (
    <div className="collapse navbar-collapse" id="mainNav">
      <ul className="navbar-nav mr-auto">
        {
          navItems.map((item) => {
            if (item.items) {
              return <NavDropdown key={item.label} item={item} />;
            } else if (item.href) {
              return (
                <Link key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              );
            }
            return (
              <span key={item.label} className="nav-link">
                {item.label}
              </span>
            );
          })
        }
      </ul>
      <SecNav />
    </div>
  );
};

Nav.propTypes = {
  navItems: React.PropTypes.array.isRequired,
};

export default Nav;
