import React from 'react';
import marked from 'marked';
import Button from 'components/button/button';
import $ from 'jquery';

const plc = {
    title: '-',
    contractType: '-',
    role: '-',
    employer: '-',
    location: '-',
    industry: '-',
    date: '-',
    minPay: '-',
    maxPay: '-',
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
            this.setState(data);
        });
    }

    render() {
        const data = this.state;

        const { title, contractType, employer, location, industry, date } = data;
        const { label: locationLabel } = location;
        const { minPay, maxPay } = data;
        const { markdown, url } = data;

        const shortFullPay = minPay && maxPay ? `${minPay} to ${maxPay}` : '';
        const shortMinPay = minPay && !maxPay ? `From ${minPay} ` : '';
        const shortMaxPay = !minPay && maxPay ? `Up to ${maxPay} ` : '';
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
                                <Button className="btn--go">Apply</Button>
                            </a>
                        </div>
                    </div>
                    <div className="overview">
                        <div className="contentWrapper">
                            <div>
                                <h3>Employer</h3>
                                <span>{employer}</span>
                            </div>
                            <div>
                                <h3>Location</h3>
                                <span>{locationLabel}</span>
                            </div>
                            <div>
                                <h3>Contract type</h3>
                                <span>{contractType}</span>
                            </div>
                            <div>
                                <h3>Salary</h3>
                                <span>{pay}</span>
                            </div>
                            <div>
                                <h3>Posted</h3>
                                <span>{date}</span>
                            </div>
                            <div>
                                <h3>Industry</h3>
                                <span>{industry}</span>
                            </div>
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
