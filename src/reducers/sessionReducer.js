import initialState from './initialState.js';

const sessionReducer = (state = initialState.currentSession , action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return Object.assign({}, state, [...state.activities, action.activity])
    default:
      return state
  }
}

export default sessionReducer;
