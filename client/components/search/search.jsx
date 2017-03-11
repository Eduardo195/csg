import React from 'react';
import Filters from 'components/filters/containers/filters';
import Paging from 'components/search/containers/paging';
import Offer from 'components/offer/offer';
import NoResults from './noResults';

function Search(props) {
    const { results, resultCount } = props;
    return (
        <section className="searchWrapper">
            <main className="flex">
                <Filters />
                <div className="anchor">
                    { !resultCount ? (<NoResults />) : null }
                    { results ? results.map(entry => <Offer data={entry} />) : null }
                    <Paging />
                    { resultCount ? (<div>{`${resultCount} results`}</div>) : null }
                </div>
            </main>
        </section>
    );
}

Search.propTypes = {
    results: React.PropTypes.array.isRequired,
    resultCount: React.PropTypes.number.isRequired,
};

export default Search;
