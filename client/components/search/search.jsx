import React from 'react';
import Filters from 'components/filters/filters';
import Paging from 'components/search/containers/paging';
import Offer from 'components/opportunity/short';
import NoResults from './noResults';

class Search extends React.Component {
  componentDidMount() {
    this.props.handleMount();
  }

  render() {
    const { results, resultCount } = this.props;
    return (
      <section className="searchWrapper">
        <main className="flex">
          <Filters />
          <div className="anchor">
            { !resultCount ? (<NoResults />) : null }
            {
              Array.isArray(results) ? (
                <div className="results">
                  { results.map(entry => <Offer key={entry._id} data={entry} />) }
                </div>
              ) : null
            }
            { resultCount ? (<div className="text-center">{`${resultCount} results`}</div>) : null }
            <Paging />
          </div>
        </main>
      </section>
    );
  }

}

Search.propTypes = {
  results: React.PropTypes.array,
  resultCount: React.PropTypes.number.isRequired,
  handleMount: React.PropTypes.func.isRequired,
};

export default Search;
