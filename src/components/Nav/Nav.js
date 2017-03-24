import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
  
import './Nav.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logOut();
    browserHistory.push('/login');
  }

  componentWillReceiveProps() {
    console.log('receieved ')
  }

  render () {
    if (!this.props.authenticated) {
      return false;
    }

    return (
      <div className="nav">
        <div className="navButtonWrapper">
          <Link to="/home"><button>Home</button></Link>
          <Link to="/session/setup"><button>New</button></Link>
          <button onClick={this.handleClick}>Logout</button>
        </div>
      </div>
    )
  }
}
