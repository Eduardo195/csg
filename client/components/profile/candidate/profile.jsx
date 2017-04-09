import React from 'react';
import ErrorMessage from 'components/messages/error';
import Personal from './containers/personal';

class Profile extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { error, isLoading } = this.props;
    return (
      <div>
        {
          error && (<ErrorMessage> { error } </ErrorMessage>)
        }
        {
          isLoading && (<div> Loading... </div>)
        }
        <Personal />
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
