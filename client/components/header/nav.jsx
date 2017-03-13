import React from 'react';
import Button from 'components/button/button';
import Link from 'components/link/link';

class Nav extends React.Component {
    constructor() {
        super();
        this.onTap = this.onTap.bind(this);
    }

    onTap() {
        this.props.logout(this.context.router);
    }

    render() {
        const { isLoggedIn, showDialog, logout } = this.props;

        return (
            <div className="nav nav--secondary">
                <Link href={isLoggedIn ? '/user/home' : '/login'}>
                    <Button>
                        { isLoggedIn ? 'Home' : 'Sign in' }
                    </Button>
                </Link>
                { !isLoggedIn && (<Link href="/register"> <Button> Sign up </Button> </Link>)}
                { isLoggedIn && (<Button onTap={this.onTap}>Logout </Button>) }
            </div>
        );
    }
}

Nav.propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired,
    showDialog: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
};

Nav.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

export default Nav;
