import React from 'react';
import Link from 'components/link/link';
import mockOpportunities from './mockOpportunities';
import mockApplications from './mockApplications';

const getMockById = id => mockApplications.filter(entry => +entry.id === +id);

function Opportunities({ params }) {
    const { id } = params;
    const data = getMockById(id);

    const details = data.length > 0 ? data.map(entry => (<div> { entry.id } </div>)) : 'Select smth fam';

    return (
      <div className="op flex">
        <section className="op--list">
          <header> Opportunities </header>
          <main>
            {
              mockOpportunities.map(op => (
                <Link href={`/employer/opportunities/${op.id}`}>
                  <article className="op--list--entry">
                    <div> { op.title } </div>
                    <div> { op.desc } </div>
                    <div> { getMockById(op.id).length } applications </div>
                  </article>
                </Link>
              ))
            }
          </main>
        </section>
        <section className="op--details">
          { details }
        </section>
      </div>
    );
}

Opportunities.propTypes = {
    params: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
    }).isRequired,
};

export default Opportunities;
