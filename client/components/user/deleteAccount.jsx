import React from 'react';
import DeleteAccountBtn from './containers/deleteAccountBtn';

function DeleteAccount() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>Delete Account</h1>
        <DeleteAccountBtn />
      </div>
    </div>
  );
}

export default DeleteAccount;
