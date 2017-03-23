import { connect } from 'react-redux';
import Login from '../components/Login/Login.js';
import {loginUser, registerUser} from '../actions/UserActions.js';

const mapStateToProps = (state, ownProps) => {
    return {
        authenticated: state.user.authenticated,
        errorMessage: state.user.errorMessage
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: (username, password) => {
            dispatch(loginUser(username, password));
        },
        registerUser: (username, password) => {
            dispatch(registerUser(username, password));
        }
    }
}

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default loginContainer