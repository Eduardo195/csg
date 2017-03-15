import React from 'react';
import Link from 'components/link/link';

function formatDate(dateInMs) {
  const d = new Date(dateInMs);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

function Offer(props) {
  const { _id, title, role, date, location, company, shortDesc } = props.data;

  const shortLocation = location ? ` ${location.label} |` : '';
  const shortRole = role ? `${role} | ` : '';
  const shortEmployer = company || '';

  return (
    <div className="offer">
      <Link href={`jobs/${_id}`}>
        <h3 className="title">{title}</h3>
      </Link>
      <h4 className="subTitle">{shortEmployer}</h4>
      <span className="location">{shortLocation}</span>
      <span>{shortRole}</span>
      <span>{ formatDate(date) }</span>
      <div className="short"> {shortDesc} </div>
    </div>
  );
}

Offer.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default Offer;
