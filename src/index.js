import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import App from './App';
import Home from './components/Home/Home.js';
import Setup from './components/Session/Setup/Setup.js';
import Active from './components/Session/Active/Active.js';

import sessionContainer from './containers/SessionContainer.js'

import { Router, Route, hashHistory } from 'react-router';

import store from './store/store.js';


const appRoutes = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/home" component={Home} />
        <Route path="session" component={sessionContainer}>
          <Route path="active" component={Active} />
          <Route path="setup" component={Setup} />
        </Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  appRoutes({ store }),
  document.getElementById('root')
);
