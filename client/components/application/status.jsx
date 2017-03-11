import React from 'react';
import NotFound from 'components/offer/notFound';
import mocks from 'mocks/shorts';

const getMockById = id => mocks.find(elem => elem.id === id);

function Status(props) {
    const { id } = props.params;
    const data = getMockById(id);

    if (!data) {
        return <NotFound />;
    }

    const { title } = data;

    return (
        <div className="advert">
            <h2 className="title">Application Status</h2>
            <section>
                <p>You&#39;ve successfully applied for:</p>
                <p>{ title }</p>
            </section>
        </div>
    );
}

Status.propTypes = {
    params: React.PropTypes.object.isRequired,
};

export default Status;
