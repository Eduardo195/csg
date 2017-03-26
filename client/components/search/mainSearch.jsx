import React from 'react';
import Button from 'components/button/button';

class MainSearch extends React.Component {

  constructor() {
    super();
    this.state = { kw: '', loc: '' };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount() {
    this.props.handleMount();
  }

  handleKeywordChange(kw) {
    this.setState(
        Object.assign({}, this.state, { kw }),
      );
  }

  handleLocationChange(loc) {
    this.setState(
          Object.assign({}, this.state, { loc }),
        );
  }

  handleSearch() {
    const { kw, loc } = this.state;
    const { locations } = this.props;
    const locIndex = locations.indexOf(loc);

    this.props.search(kw, locIndex >= 0 ? locIndex : null);
    this.setState({});

    this.context.router.push('/opportunities');
  }

  render() {
    const { locations } = this.props;

    return (
      <div className="mainSearch">
        <h2>Find your future</h2>
        <div className="form-inline text-center d-flex justify-content-center">
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <label htmlFor="workSearh" className="sr-only">Role Keyword</label>
            <input type="text" onChange={this.handleKeywordChange} className="form-control" id="workSearh" placeholder="Role" />
          </div>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <label htmlFor="locationSearch" className="sr-only">Location Keyword</label>
            <input type="text" list="loc-datalist" onChange={this.handleLocationChange} className="form-control" id="locationSearch" placeholder="Location" />
            <datalist id="loc-datalist">
              {
                locations && locations.map(entry => (
                  <option key={entry} value={entry} />
                ))
              }
            </datalist>
          </div>
          <Button className="btn--large" onTap={this.handleSearch}>Go</Button>
        </div>
      </div>
    );
  }
}

MainSearch.propTypes = {
  handleMount: React.PropTypes.func.isRequired,
  locations: React.PropTypes.array.isRequired,
  search: React.PropTypes.func.isRequired,
};

MainSearch.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default MainSearch;
