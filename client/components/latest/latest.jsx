import React from 'react';
import Offer from '../offer/offer';

class Latest extends React.Component {
    componentDidMount() {
        const { items } = this.props;
        if (!items || items.length <= 0) {
            this.props.handleMount();
        }
    }

    render() {
        const data = this.props.items || [];
        return (
            <div className="latest">
                <h2 className="sectionTitle">Latest Opportunities</h2>
                { data.map(op => <Offer key={op.id} data={op} />) }
            </div>
        );
    }
}

export default Latest;
