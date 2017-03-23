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
                    history: action.user.history,
                    authenticated: true
                }
            )
        case 'LOGIN_FAIL':
            return Object.assign({},
                state,
                {
                    ...state,
                    errorMessage: action.err
                }
            )
        case 'REGISTER_SUCCESS':
            return Object.assign({},
                state,
                {
                    ...state,
                    id: action.user._id,
                    username: action.user.username,
                    history: action.user.history,
                    authenticated: true
                }
            )
        case 'REGISTER_FAIL':
            return Object.assign({},
                state,
                {
                    ...state,
                    errorMessage: action.err
                }
            )            
        default:
            return state;
    }
}

export default userReducer;