import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer.js';
import userReducer from './userReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  currentSession: sessionReducer
});

export default rootReducer;
  
