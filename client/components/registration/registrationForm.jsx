import React from 'react';
import LocalRegistration from './containers/localRegistration';

function RegistrationForm() {
  return (
    <div className="registrationForm">
      <h2 className="title spaced text-uppercase">Register with</h2>
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
