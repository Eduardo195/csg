import React from 'react';

function DeleteAccountBtn(props) {
  return (
    <button onClick={props.deleteAccount} className="btn btn--main">
      Delete
    </button>
  );
}

DeleteAccountBtn.propTypes = {
  deleteAccount: React.PropTypes.func.isRequired,
};

export default DeleteAccountBtn;
