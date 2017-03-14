import React from 'react';
import SideImageLayout from 'components/layouts/sideImageLayout';
import RegistrationForm from './registrationForm';
import RegistrationSuccess from './registrationSuccess';

function Registration(props) {
    const { registrationSuccess } = props;

    return (
      <SideImageLayout>
        {
          registrationSuccess ? (
            <div className="d-flex flex-grow align-items-center justify-content-center">
              <RegistrationSuccess />
            </div>
        ) : (
          <RegistrationForm />
        )
      }
      </SideImageLayout>
    );
}

Registration.propTypes = {
    registrationSuccess: React.PropTypes.bool.isRequired,
};

export default Registration;
