import React from 'react';
import Link from 'components/link/link';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';

class RegistrationConfirmation extends React.Component {

  componentDidMount() {
    this.props.validate(this.props.params.hash);
  }

  render() {
    const { isLoading, isValid } = this.props;
    return (
      <div>
        <h1>Registration confirmation</h1>
        {
           !isLoading && (
             isValid ? (
              <SuccessMessage>
                Your email has been confirmed.
                <div>
                  You can now <Link href='/login'> sign in </Link>
                  <br />
                </div>
              </SuccessMessage>
            ) : (
              <ErrorMessage>
                Something went wrong on our side, your account has not been activated.
                <div>Please try again later</div>
              </ErrorMessage>
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
