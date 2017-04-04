import React from 'react';
import MyOpportunities from './containers/myOpportunities';
import Applications from './containers/applications';

class EmployerHome extends React.Component {

  componentDidMount() {
    this.props.getMyOpportunities();
  }

  render() {
    return (
      <div>
        <MyOpportunities />
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

EmployerHome.propTypes = {
  getMyOpportunities: React.PropTypes.func.isRequired,
};

export default EmployerHome;
