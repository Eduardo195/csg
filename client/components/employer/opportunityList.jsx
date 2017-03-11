import React from 'react';
import mockOpportunities from './mockOpportunities';

const OpportunityList = () => (
    <section className="oplist">
        <header>
            Opportunities
        </header>
        <main>
            {
                mockOpportunities.map(op => (
                    <article className="">
                        <div> { op.title } </div>
                        <div> { op.desc } </div>
                    </article>
                ))
            }
        </main>
    </section>
);

export default OpportunityList;
