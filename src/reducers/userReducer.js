import initialState from './initialState.js';

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({},
                state,
                {
                    ...state,
                    id: action.user._id,
                    username: action.user.username,
                    authenticated: true
                }
            )
        case 'LOGIN_FAIL':
            return Object.assign({},
                state,
                {
                    ...state,
                    errorMsg: action.err
                }
            )
        default:
            return state;
    }
}

export default userReducer;