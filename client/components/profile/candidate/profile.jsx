import React from 'react';
import ErrorMessage from 'components/messages/error';
import Personal from './containers/personal';
import Professional from './containers/professional';
import EmployerVisibility from './containers/employerVisibility';

class Profile extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { error, isLoading } = this.props;
    return (
      <div className="profile">
        {
          error && (<ErrorMessage> { error } </ErrorMessage>)
        }
        {
          isLoading && (<div> Loading... </div>)
        }
        <Personal />
        <Professional />
        <EmployerVisibility />
      </div>
    );
  }
}

Profile.propTypes = {
  onMount: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string,
};

export default Profile;
