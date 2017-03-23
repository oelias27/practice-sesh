import axios from 'axios';

const loginUser = (username, password) => {
    const request = axios.post('localhost:3000/users/login', {
        username: username,
        password: password
    })

    return (dispatch) => {
        request.then(data => {

            if (data.auth) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    user: data.user
                })
            }

            else {
                dispatch({
                    type: 'LOGIN_FAIL',
                    err: data.err
                })
            }

            
        })
    }
}