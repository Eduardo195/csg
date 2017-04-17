import React from 'react';
import Link from 'components/link/link';
import ErrorMessage from 'components/messages/error';
import Application from 'components/application/application';

function ApplicationsShort({ error, applications }) {
  return (
    <div className="applications">
      <h1 className="title text-uppercase bold">
        <Link href="/applications"> My Applications </Link>
      </h1>
      {
        applications && applications.map(({ opportunity }) => (
          <Application key={opportunity._id} opportunity={opportunity} />
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
