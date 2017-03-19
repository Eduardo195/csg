import React from 'react';
import PasswordReset from './passwordReset';
import DeleteAccount from './deleteAccount';

function Profile() {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1>Your Profile</h1>
        </div>
      </div>
      <PasswordReset />
      <DeleteAccount />
    </div>
  );
}

export default Profile;
