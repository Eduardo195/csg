import React from 'react';
import Logo from 'components/header/logo';
import LocalRegistration from './containers/localRegistration';

function RegistrationForm() {
    return (
      <div className="registrationForm">
        <div><Logo /></div>
        <h2 className="title">Register with</h2>
        <br />
        <div className="options">
          <button className="btn">Facebook</button>
          <button className="btn">Google+</button>
          <button className="btn">LinkdIn</button>
        </div>
        <br />
        <p>Or</p>
        <LocalRegistration />
      </div>
    );
}

export default RegistrationForm;
