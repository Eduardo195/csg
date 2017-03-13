import React from 'react';
import Nav from 'components/header/containers/nav';
import MainNav from 'components/mainNav/mainNav';
import Logo from 'components/header/logo';

const Header = () => (
    <header className="header">
        <Logo />
        <MainNav />
        <Nav />
    </header>
);

export default Header;
