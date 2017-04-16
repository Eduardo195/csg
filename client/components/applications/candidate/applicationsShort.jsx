import React from 'react';
import ErrorMessage from 'components/messages/error';
import moment from 'moment';

function ApplicationsShort({ error, applications }) {
  return (
    <div className="applications">
      <h1 className="title text-uppercase bold">My Applications</h1>
      {
        applications && applications.map(({ opportunity }) => (
          <div key={opportunity._id} className="application">
            <article>
              <header>
                <h5>
                  <span className="bold">
                    {opportunity.title}
                  </span>
                  <span className="flt-r">
                    [Message]
                  </span>
                </h5>
              </header>
              <main>
                <span>
                  {opportunity.employerName}
                </span>
                <span className="flt-r text-uppercase status">
                  received
                </span>
              </main>
              <footer className="small bold">
                { moment(opportunity.date).format('DD/MM/YYYY') }
              </footer>
            </article>
          </div>
        ))
      }
      {error && (
        <ErrorMessage>{ error }</ErrorMessage>
      )}
    </div>
  );
}

ApplicationsShort.propTypes = {
  error: React.PropTypes.string,
  applications: React.PropTypes.array,
};

export default ApplicationsShort;
