import React from 'react';

function LogoutBtn(props) {
  return (
    <button className="btn btn--circular btn--logout" onClick={props.logout} />
  );
}

LogoutBtn.propTypes = {
  logout: React.PropTypes.func.isRequired,
};

export default LogoutBtn;
