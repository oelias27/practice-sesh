import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer.js';
import { loadState, saveState } from './localStorage.js';
import throttle from 'lodash/throttle';

const logger = createLogger();
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000))

export default store;
