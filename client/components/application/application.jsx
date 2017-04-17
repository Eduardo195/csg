import React from 'react';
import moment from 'moment';

const Application = ({ opportunity }) => (
  <article className="application">
    <header className="d-flex">
      <h5 className="flex-anchor bold">{opportunity.title}</h5>
      <span className="align-self-end"> [Message] </span>
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
  );

export default Application;
