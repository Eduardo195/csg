import React from 'react';
import Applications from 'components/applications/employer/containers/applications';
import Opportunities from 'components/opportunities/employer/containers/opportunities';

class EmployerHome extends React.Component {

  componentDidMount() {
    this.props.getMyOpportunities();
  }

  render() {
    return (
      <div>
        <Opportunities />
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
