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
        <div className="op--list">
          { error && (<ErrorMessage> { error } </ErrorMessage>)}
          {
            opportunities.map(op => (
              <section key={op._id} className="op">
                <header>
                  <h4>
                    { op.title }
                  </h4>
                  {
                    op.contractType && (
                      <small>{ op.contractType.label } |</small>
                    )
                  }
                  {
                    op.location && (
                      <small>{ op.location.label }</small>
                    )
                  }
                </header>
                <footer>
                  <DeleteOpportunityBtn dataValue={op._id}>Delete</DeleteOpportunityBtn>
                  <button>Edit [TODO]</button>
                </footer>
              </section>
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
