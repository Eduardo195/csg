/* eslint no-underscore-dangle: 0 */
import React from 'react';
import ErrorMessage from 'components/messages/error';
import DeleteOpportunityBtn from './containers/deleteOpportunityBtn';

const MyOpportunities = (props) => {
  const { opportunities, error } = props;
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>My Opportunities</h1>
        <div>
          { error && (
          <ErrorMessage> { error }</ErrorMessage>
          )}
          { opportunities.map(op => (
            <div key={op._id}>
              <h3>{ op.title }</h3>
              <h3>{ op._id }</h3>
              <DeleteOpportunityBtn dataValue={op._id}>Delete</DeleteOpportunityBtn>
              <button>Edit [TODO]</button>
              <button>Hide [TODO]</button>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

MyOpportunities.propTypes = {
  opportunities: React.PropTypes.array.isRequired,
  error: React.PropTypes.string,
};

export default MyOpportunities;
