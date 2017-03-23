import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null
        }
    }

    handleChange(e) {
        if (e.target.id === 'loginUsername') {
            this.setState({
                ...this.state,
                username: e.target.value
            });
        }
        else {
            this.setState({
                ...this.state,
                password: e.target.value
            });
        }

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <input
                    id="loginUsername" 
                    placeholder="username" 
                    onChange={this.handleChange.bind(this)} 
                />
                <input 
                    id="loginPassword"
                    placeholder="password" 
                    onChange={this.handleChange.bind(this)} 
                />
                <button> Log In </button>
                <button> Register </button>
            </div>
        );
    }
}

export default Login;