import React from 'react';
import marked from 'marked';  // eslint-disable-line import/no-extraneous-dependencies
import Link from 'components/link/link';

import moment from 'moment';
import $ from 'jquery';

const plc = {
  title: '-',
  contractType: '-',
  role: '-',
  company: '-',
  location: '-',
  industry: '',
  date: '-',
};

function getRawMarkup(markdown) {
  return {
    __html: marked(markdown, { sanitize: true }),
  };
}

class Opportunity extends React.Component {
  constructor() {
    super();
    this.state = plc;
  }

  componentDidMount() {
    $.ajax({
      url: `op/${this.props.params.id}`,
    }).done((data) => {
      this.setState(data);
    });
  }

  render() {
    const data = this.state;

    const { _id, title, pay, contractType, company, location, industry, date } = data;
    const { label: locationLabel } = location;
    const { markdown } = data;

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
              <div className="content" dangerouslySetInnerHTML={getRawMarkup(markdown || 'No content')} />
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
        <div>
          <Link href={`/opportunity/${_id}/apply`} className="btn btn--main"> Apply </Link>
        </div>
      </div>
    );
  }
}

Opportunity.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default Opportunity;
