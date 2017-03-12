import React from 'react';
import Button from 'components/button/button';

class Login extends React.Component {

    constructor() {
        super();
        this.onTapLogin = this.onTapLogin.bind(this);
        this.getEmailRef = (ref) => { this.email = ref; };
        this.getPwdRef = (ref) => { this.pwd = ref; };
    }

    onTapLogin() {
        this.props.createSession(this.email.value, this.pwd.value);
    }

    render() {
        return (
            <div className="loginForm">
                <div className="centered">
                    <input ref={this.getEmailRef} type="email" placeholder="Username / Email" />
                </div>
                <div className="centered" >
                    <input ref={this.getPwdRef} type="password" placeholder="password" />
                </div>
                <div className="centered">
                    <Button onTap={this.onTapLogin}>Login</Button>
                </div>
                <hr className="hr-text" data-content="Or" />
                <Button className="btn--main">L</Button>
                <Button>F</Button>
                <Button>G+</Button>
            </div>
        );
    }
}

Login.propTypes = {
    createSession: React.PropTypes.func.isRequired,
};

export default Login;
