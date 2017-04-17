import React from 'react';
import QuickView from './quickView';

class Home extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className="home">
        <QuickView />
      </div>
    );
  }
}

Home.propTypes = {
  onMount: React.PropTypes.func.isRequired,
};

export default Home;
