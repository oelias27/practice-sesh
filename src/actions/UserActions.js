import axios from 'axios';
import { browserHistory } from 'react-router'; 

const loginUser = (username, password) => {
    const request = axios.post('http://localhost:3000/users/login', {
        username: username,
        password: password
    })

    return (dispatch) => {
        request.then(data => {

            const response = data.data;

            if (response.auth) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    user: response.user
                })

                browserHistory.push('/home');
            }

            else {
                dispatch({
                    type: 'LOGIN_FAIL',
                    err: response.err
                })
            }

            
        })
    }
}



const registerUser = (username, password) => {
    const request = axios.post('http://localhost:3000/users/registerUser', {
        username: username,
        password: password,
        admin: false
    })

    return (dispatch) => {
        request.then(data => {

            const response = data.data;
            console.log(data)
            if (response.username) {
                dispatch({
                    type: 'REGISTER_SUCCESS',
                    user: response
                })

                browserHistory.push('/home');
            }

            else {
                dispatch({
                    type: 'REGISTER_FAIL',
                    err: response.error
                })
            }

            
        })
    }
}

export { loginUser, registerUser };