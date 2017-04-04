/* eslint no-underscore-dangle: 0 */
import React from 'react';
import Link from 'components/link/link';
import ErrorMessage from 'components/messages/error';
import DeleteOpportunityBtn from './containers/deleteOpportunityBtn';

const Opportunities = (props) => {
  const { opportunities, error } = props;

  return (
    <div className="jumbotron">
      <div className="container">
        <h1>My Opportunities</h1>
        { error && (<ErrorMessage> { error } </ErrorMessage>)}
        {
          opportunities.map(op => (
            <section key={op._id} className="row flex-column op">
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
                <DeleteOpportunityBtn dataValue={op._id} className="btn--main">Delete</DeleteOpportunityBtn>
                <Link href={`/opportunity/edit/${op._id}`} className="btn btn--main">Edit</Link>
              </footer>
            </section>
          ))
        }
        <div className="row justify-content-end">
          <Link href="/opportunity/create" className="btn btn--main">Create new</Link>
        </div>
      </div>
    </div>
  );
};

Opportunities.propTypes = {
  opportunities: React.PropTypes.array.isRequired,
  error: React.PropTypes.string,
};

export default Opportunities;
