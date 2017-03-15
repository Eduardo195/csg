import React from 'react';

class RegistrationConfirmation extends React.Component {

  componentDidMount() {
    this.props.validate(this.props.params.hash);
  }

  render() {
    const { isLoading, isValid } = this.props;
    return (
      <div>
        <h1>Registration confirmation</h1>
        <div>
          Contacting server ...
          {
            !isLoading ? 'Done.' : ''
          }
        </div>

        {
          !isLoading && (
            isValid ? (
              <div className="alert alert-success" role="alert">
                <strong>Great success!</strong> Your email has been confirmed.
                <div>Proceed to login</div>
              </div>
            ) : (
              <div className="alert alert-warning" role="alert">
                <strong>Wooops!</strong>
                Something went wrong, your account has not been activated.
                <div>Please try again later</div>
              </div>
            )
          )
        }
      </div>
    );
  }
}

RegistrationConfirmation.propTypes = {
  hash: React.PropTypes.string.isRequired,
  validate: React.PropTypes.func.isRequired,
  params: React.PropTypes.shape({
    hash: React.PropTypes.string.isRequired,
  }),
  isLoading: React.PropTypes.bool.isRequired,
  isValid: React.PropTypes.bool.isRequired,
};

export default RegistrationConfirmation;
