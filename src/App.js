import React, { Component } from 'react';

import NavContainer from './containers/NavContainer';

import './App.css';

/**
 * Wrapper for app
 * 
 * children: {NavContainer}  
 *           All mounted components after login
 * 
 * @module App
 * @type {ReactClass}
 */
class App extends Component {

  render() {
    return (
      <div className="App">
        <NavContainer />
        <div id="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
