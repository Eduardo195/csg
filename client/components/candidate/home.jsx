import React from 'react';
import Applications from './containers/applications';

class Home extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <Applications />
    );
  }
}

Home.propTypes = {
  onMount: React.PropTypes.func.isRequired,
};

export default Home;
