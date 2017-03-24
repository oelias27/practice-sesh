import React, { Component } from 'react';

import './App.css';

import NavContainer from './containers/NavContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavContainer />
        {this.props.children}
      </div>
    );
  }
}

export default App;
