import React from 'react';
import MainNav from 'components/mainNav/mainNav';
import Logo from 'components/header/logo';

const Header = () => (
    <header className="header">
        <Logo />
        <MainNav />
    </header>
);

export default Header;
