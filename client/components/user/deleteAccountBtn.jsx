import React from 'react';

function DeleteAccountBtn(props) {
  return (
    <button onClick={props.deleteAccount}>
      Delete acc
    </button>
  );
}

DeleteAccountBtn.propTypes = {
  deleteAccount: React.PropTypes.func.isRequired,
};

export default DeleteAccountBtn;
