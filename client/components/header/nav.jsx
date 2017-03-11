import React from 'react';
import Button from 'components/button/button';
import Link from 'components/link/link';

function Nav(props) {
    const { isLoggedIn, showDialog, logout } = props;

    return (
        <div className="nav nav--secondary">
            <Link href={isLoggedIn ? '/user/home' : '/login'}>
                { isLoggedIn ? 'Home' : 'Sign in' }
            </Link>
            <Button className="btn--bolder" onTap={showDialog}>{isLoggedIn ? 'Notifications' : 'Sign up'}</Button>
            { isLoggedIn && (<Button onTap={logout}>Logout </Button>) }
        </div>
    );
}

Nav.propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired,
    showDialog: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
};

export default Nav;
