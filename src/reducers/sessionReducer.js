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



    case 'CLEAR_ACTIVITIES':
      return Object.assign({}, 
        state, 
        {
          ...state,
          activities: []
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



    case 'TICK':
      let newTime = state.time + 1;
      let updateActivities = state.activities.map((a) => {
        if (a.timerOn) {
          return {
            ...a,
            time: a.time + 1
          }
        }
        else {
          return a;
        }
      });
      return Object.assign({},
        state,
        {
          ...state,
          time: newTime,
          activities: updateActivities
        }
      )



    case 'TOGGLE_ACTIVITY':
      updateActivities = state.activities.map((a) => {
        if (a.id === action.id) {
          return {
            ...a,
            timerOn: !a.timerOn
          }
        }
        return a;
      })
      return Object.assign({},
        state,
        {
          ...state,
          activities: updateActivities
        }  
      )

    case 'LOG_OUT':
      return initialState.currentSession      
    default:
      return state;
  }
}

export default sessionReducer;
