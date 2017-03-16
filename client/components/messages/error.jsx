import React from 'react';

function ErrorMessage({ title, msg }) {
  return (
    <div className="alert alert-danger" role="alert">
      <strong>{ title || 'Error!'}</strong>
      <div>{ msg }</div>
    </div>
  );
}

ErrorMessage.propTypes = {
  title: React.PropTypes.string,
  msg: React.PropTypes.string.isRequired,
};

export default ErrorMessage;
