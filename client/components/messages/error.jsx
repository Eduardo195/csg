import React from 'react';

function ErrorMessage({ title, children }) {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">{ title || 'Error!'}</h4>
      <p className="mb-0">{ children }</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ]).isRequired,
};

export default ErrorMessage;
