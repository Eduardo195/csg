import React from 'react';
import QuickView from './quickView';
import Cvs from 'components/cvs/containers/cvs';

class Home extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className='home'>
        <QuickView />
        <Cvs />
      </div>
    );
  }
}

Home.propTypes = {
  onMount: React.PropTypes.func.isRequired,
};

export default Home;
