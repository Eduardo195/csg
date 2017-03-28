import React from 'react';
import ErrorMessage from 'components/messages/error';
import moment from 'moment';

function Applications({ error, applications }) {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>My Applications</h1>
        {
          applications && applications.map(({ opportunity }) => (
            <div className="application">
              <div>
                <h4>{opportunity.title}</h4>
                <strong>
                  {opportunity.employerName}
                </strong>
                , {opportunity.location.label} -
                <i>[ROLE - TODO]</i>
              </div>
              <div>
                <small>{moment(opportunity.date).format('DD/MM/YY HH:MM')}</small>
              </div>
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
