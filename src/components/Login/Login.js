import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.sendLogin = this.sendLogin.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.sendRegister = this.sendRegister.bind(this);
    }

    componentWillMount() {
        if (this.props.authenticated) {
            browserHistory.push('/home');
        }
    }

    sendLogin() {
        this.props.loginUser(
            this.usernameField.value, 
            this.passwordField.value
        );
    }

    handleKeyUp(e) {
        if (e.target.key === "Enter") {
            this.sendLogin();
        }
    }

    sendRegister() {
        this.props.registerUser(
            this.usernameField.value, 
            this.passwordField.value
        )
    }


    render() {

        return (
            <div id="login">
                <h1>Practice Sesh</h1>
                <input
                    ref={el => this.usernameField = el}
                    onKeyUp={this.handleKeyUp}
                    placeholder="username" 
                />
                <input 
                    ref={el => this.passwordField = el}
                    onKeyUp={this.handleKeyUp}
                    type="password"
                    placeholder="password" 
                />  
                
                <div className="loginButtons">
                    <button name="login" onClick={this.sendLogin}>
                        Log In 
                    </button>
                    <button name="register" onClick={this.sendRegister}>
                        Register
                    </button>
                </div>
                <div className="loginErr">
                    <p>
                        {this.props.errorMessage || null}
                    </p>
                </div>
                
            </div>
        );
    }
}

export default Login;