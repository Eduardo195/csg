import React from 'react';
import Link from 'components/link/link';
import LogoutBtn from './containers/logoutBtn';
import ProfileBtn from './profileBtn';

function Nav(props) {
  const { isLoggedIn } = props;
  return (
    <div className="nav nav--secondary">
      <Link href={isLoggedIn ? '/user/home' : '/login'}>
        <span className="btn btn--main">{ isLoggedIn ? 'Home' : 'Sign in' }</span>
      </Link>
      { !isLoggedIn && (<Link href="/registration"><span className="btn btn--main"> CREATE ACCOUNT </span></Link>)}
      { isLoggedIn && (<ProfileBtn />)}
      { isLoggedIn && (<LogoutBtn />)}
    </div>
  );
}

Nav.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
};

export default Nav;
