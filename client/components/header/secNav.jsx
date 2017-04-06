import React from 'react';
import Link from 'components/link/link';
import LogoutBtn from './containers/logoutBtn';

function SecNav(props) {
  const { isLoggedIn } = props;
  return (
    <div className="navbar-nav">
      <Link href={isLoggedIn ? '/home' : '/login'} className="btn btn--main-alt font-weight-bold">
        { isLoggedIn ? 'home' : 'sign in' }
      </Link>
      { !isLoggedIn && (<Link href="/registration" className="btn btn--main text-uppercase font-weight-bold">create account</Link>)}
      { isLoggedIn && (<Link href="/profile" className="btn btn--main">Profile</Link>)}
      { isLoggedIn && (<LogoutBtn className="btn--main">Logout</LogoutBtn>)}
    </div>
  );
}

SecNav.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
};

export default SecNav;
