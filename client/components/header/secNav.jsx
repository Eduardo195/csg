import React from 'react';
import Link from 'components/link/link';
import LogoutBtn from './containers/logoutBtn';
import ProfileBtn from './profileBtn';

function SecNav(props) {
  const { isLoggedIn } = props;
  return (
    <div className="navbar-nav">
      <Link href={isLoggedIn ? '/user/home' : '/login'}>
        <span className="btn btn--main">{ isLoggedIn ? 'Home' : 'Sign in' }</span>
      </Link>
      { !isLoggedIn && (
      <Link href="/registration">
        <span className="btn btn--main"> CREATE ACCOUNT </span>
      </Link>
      )}
      { isLoggedIn && (<ProfileBtn />)}
      { isLoggedIn && (<LogoutBtn />)}
    </div>
  );
}

SecNav.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
};

export default SecNav;
