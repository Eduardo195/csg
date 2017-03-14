import React from 'react';

function ErrorMessage({ msg }) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong>
        <div>{ msg }</div>
      </div>
    );
}

ErrorMessage.propTypes = {
    msg: React.PropTypes.string.isRequired,
};

export default ErrorMessage;
