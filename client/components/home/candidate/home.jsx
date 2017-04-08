import React from 'react';
import Applications from 'components/applications/candidate/containers/applications';
import Cvs from 'components/cvs/containers/cvs';

class Home extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <Applications />
        <Cvs />
      </div>
    );
  }
}

Home.propTypes = {
  onMount: React.PropTypes.func.isRequired,
};

export default Home;
