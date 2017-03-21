import React from 'react';
import SuccessMessage from 'components/messages/success';

function RegistrationSuccess(props) {
  return (
    <SuccessMessage>
      Your account has been created.
      <br />
      Please follow the confirmation link we sent to <strong> {props.email} </strong>
    </SuccessMessage>
  );
}

RegistrationSuccess.propTypes = {
  email: React.PropTypes.string.isRequired,
};

export default RegistrationSuccess;
