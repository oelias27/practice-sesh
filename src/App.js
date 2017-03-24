import React, { Component } from 'react';

import './App.css';

import NavContainer from './containers/NavContainer';

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
