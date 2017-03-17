import initialState from './initialState.js';

const sessionReducer = (state = initialState.currentSession , action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return Object.assign({}, 
        state, 
        {
          ...state,
          activities: [...state.activities, action.activity]
        }
      )
    case 'DELETE_ACTIVITY':
      return Object.assign({}, 
        state, 
        {
          ...state,
          activities: state.activities.filter((a) => a.id !== action.id)
        }
      )
    default:
      return state
  }
}

export default sessionReducer;
