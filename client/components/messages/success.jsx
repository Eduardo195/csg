import React from 'react';

function SuccessMessage({ title, children }) {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">{ title || 'Success!'}</h4>
      <p className="mb-0">{ children }</p>
    </div>
  );
}

SuccessMessage.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ]).isRequired,
};

export default SuccessMessage;
