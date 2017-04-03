import React from 'react';
// import marked from 'marked';  // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment';

function getRawMarkup(markdown, body) {
  return {
    __html: body //|| marked(markdown, { sanitize: true }),
  };
}

const Opportunity = props => {
  const { opportunity } = props;

  const { _id, title, pay, contractType, body, company, location, industry, date } = opportunity;
  const { label: locationLabel } = location;
  const { markdown } = opportunity;

  const minPay = pay && pay.min;
  const maxPay = pay && pay.max;

  const shortFullPay = minPay && maxPay ? `${minPay} to ${maxPay}` : '';
  const shortMinPay = minPay && !maxPay ? `From ${minPay} ` : '';
  const shortMaxPay = !minPay && maxPay ? `Up to ${maxPay}` : '';
  const payLabel = shortFullPay || shortMinPay || shortMaxPay || '';

  return (
    <div className="op">
      <h1 className="title">{ title }</h1>
      <div className="mainWrapper d-flex flex-wrap">
        <div className="detais align-self-stretch">
          <div className="contentWrapper">
            <div className="content" dangerouslySetInnerHTML={getRawMarkup(markdown || 'No content', body)}></div>
          </div>
        </div>
        <div className="overview align-self-stretch">
          <div className="contentWrapper">
            <h4>Employer</h4>
            <span>{company}</span>
            <h4>Location</h4>
            <span>{locationLabel}</span>
            <h4>Contract type</h4>
            <span>{contractType.label}</span>
            <h4>Salary</h4>
            <span>{payLabel}</span>
            <h4>Posted</h4>
            <span>{moment(date).format('ll')}</span>
            <h4>Industry</h4>
            <span>{industry}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Opportunity.propTypes = {
  opportunity: React.PropTypes.object.isRequired,
};

export default Opportunity;
