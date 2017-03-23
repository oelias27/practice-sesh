import React, { Component } from 'react';
import { browserHistory } from 'react-router';

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
            <div>
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
                <div>
                    Remember me:
                    <input 
                        type="checkbox"
                        value="remember"
                        ref={el => this.rememberMe = el}
                    />
                </div>
                
                <button onClick={this.sendLogin}>
                    Log In 
                </button>
                <button onClick={this.sendRegister}>
                    Register
                </button>
                <p>
                    {this.props.errorMessage || null}
                </p>
            </div>
        );
    }
}

export default Login;