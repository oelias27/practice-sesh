import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer.js';


const rootReducer = combineReducers({
  currentSession: sessionReducer
});

export default rootReducer;
  
