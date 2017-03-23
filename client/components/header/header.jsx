import React from 'react';
import Logo from 'components/header/logo';
import Nav from 'components/header/nav';

const Header = () => (
  <nav className="navbar navbar-toggleable-md navbar-light">
    <Logo className="navbar-brand" />
    <button
      className="navbar-toggler navbar-toggler-right" type="button"
      data-toggle="collapse" data-target="#mainNav"
      aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Nav />
  </nav>
);

export default Header;
