import React from 'react';
import Offer from '../offer/offer';

function Latest() {
    const data = [];
    return (
        <div className="latest">
            <h2 className="sectionTitle">Latest Opportunities</h2>
            { data.map(op => <Offer key={op.id} data={op} />) }
        </div>
    );
}

export default Latest;
