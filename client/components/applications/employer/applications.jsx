/* eslint no-underscore-dangle: 0 */
import React from 'react';
import ErrorMessage from 'components/messages/error';

const Applications = (props) => {
  const { applications, error } = props;

  return (
    <div className="jumbotron">
      <div className="container">
        <h1>Applications</h1>
        { error && (<ErrorMessage> { error } </ErrorMessage>)}
        {
          applications.map(({ _id, opportunity }) => (
            <section key={_id} className="row flex-column op">
              <header>
                <h4>
                  { opportunity.title }
                </h4>
                {
                  opportunity.contractType && (
                    <small>{ opportunity.contractType.label } |</small>
                  )
                }
                {
                  opportunity.location && (
                    <small>{ opportunity.location.label }</small>
                  )
                }
              </header>
            </section>
          ))
        }
      </div>
    </div>
  );
};

Applications.propTypes = {
  applications: React.PropTypes.array.isRequired,
  error: React.PropTypes.string,
};

export default Applications;
