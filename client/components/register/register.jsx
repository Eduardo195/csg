import React from 'react';
import Button from 'components/button/button';
import Logo from 'components/header/logo';
import SideImageLayout from 'components/layouts/sideImageLayout';

// Note: They're going to be different whe ndesign comes through
function Register() {
    return (
        <SideImageLayout className="register">
            <div className="flex flex--col">
                <div><Logo /></div>
                <h2>Register with</h2>
                <div className="options">
                    <Button>Facebook</Button>
                    <Button>Google+</Button>
                    <Button>LinkdIn</Button>
                </div>
                <br />
                <p>Or</p>
                <div className="form">
                    <div><input type="email" placeholder="Email" /></div>
                    <div><input type="password" placeholder="Password" /></div>
                    <div><input type="password" placeholder="Confirm Password" /></div>
                    <div>
                        <Button>Create Account</Button>
                    </div>
                </div>
            </div>
        </SideImageLayout>
    );
}

export default Register;
