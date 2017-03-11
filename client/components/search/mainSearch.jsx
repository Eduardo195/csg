import React from 'react';
import Button from 'components/button/button';
import TextAutocomplete from 'components/input/textAutocomplete';

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
        const { kw, loc } = this.state;
        const { roles, locations } = this.props;

        return (
            <div className="mainSearch">
                <h2 className="title">Find your future</h2>
                <div className="form">
                    <TextAutocomplete
                      id="workSearh" placeholder="Role"
                      className="small"
                      handleChange={this.handleKeywordChange}
                      value={kw}
                    />
                    <TextAutocomplete
                      id="locationSearch" placeholder="Location"
                      datalist={locations}
                      className="small"
                      handleChange={this.handleLocationChange}
                      value={loc}
                    />
                    <Button className="btn--large" onTap={this.handleSearch}>Go</Button>
                </div>
            </div>
        );
    }
}

MainSearch.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

// MainSearch.contextTypes = {
//   router: React.PropTypes.func.isRequired
// };
export default MainSearch;
