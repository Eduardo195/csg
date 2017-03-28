import React from 'react';
import ErrorMessage from 'components/messages/error';

function Applications({ error, applications }) {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>Applications</h1>
        {
          applications && applications.map(app => (
            <div className="row">
              { app._id }
            </div>
        ))
        }
        {error && (
          <ErrorMessage>{ error }</ErrorMessage>
        )}
      </div>
    </div>
  );
}

Applications.propTypes = {
  error: React.PropTypes.string,
  applications: React.PropTypes.array,
};

export default Applications;
