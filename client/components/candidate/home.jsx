import React from 'react';
import Applications from './containers/applications';

class Home extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <Applications />
        <div className="jumbotron">
          <div className="container">
            <h1>My drafts</h1>
            <div>TODO</div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  onMount: React.PropTypes.func.isRequired,
};

export default Home;
