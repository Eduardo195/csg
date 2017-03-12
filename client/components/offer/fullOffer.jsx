import React from 'react';
import marked from 'marked';
import Button from 'components/button/button';
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

class FullOffer extends React.Component {
    constructor() {
        super();
        this.state = plc;
    }

    componentDidMount() {
        $.ajax({
            url: `op/${this.props.params.id}`,
        }).done((data) => {
            console.log(data);
            this.setState(data);
        });
    }

    render() {
        const data = this.state;

        const { title, contractType, company, location, industry, date } = data;
        const { label: locationLabel } = location;
        const { minPay, maxPay } = data;
        const { markdown, url } = data;

        const shortFullPay = minPay && maxPay ? `${minPay} to ${maxPay}` : '';
        const shortMinPay = minPay && !maxPay ? `From ${minPay} ` : '';
        const shortMaxPay = !minPay && maxPay ? `Up to ${maxPay}` : '';
        const pay = shortFullPay || shortMinPay || shortMaxPay || '';

        return (
            <div className="op">
                <h1 className="title">{ title }</h1>
                <div className="mainWrapper">
                    <div className="detais">
                        <div className="contentWrapper">
                            <div className="content" dangerouslySetInnerHTML={getRawMarkup(markdown || 'No content')} />
                            <br />
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <Button className="d-inline-block btn--main">Apply</Button>
                            </a>
                        </div>
                    </div>
                    <div className="overview">
                        <div className="contentWrapper">
                            <h3>Employer</h3>
                            <span>{company}</span>
                            <h3>Location</h3>
                            <span>{locationLabel}</span>
                            <h3>Contract type</h3>
                            <span>{contractType.label}</span>
                            <h3>Salary</h3>
                            <span>{pay}</span>
                            <h3>Posted</h3>
                            <span>{moment(date).format('ll')}</span>
                            <h3>Industry</h3>
                            <span>{industry}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
FullOffer.propTypes = {
    params: React.PropTypes.object.isRequired,
};

export default FullOffer;
