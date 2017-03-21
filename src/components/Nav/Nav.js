import React, { Component } from 'react';
import { Link } from 'react-router'

import './Nav.css';

export default class Nav extends Component {
  render () {
    return (
      <div className="nav">
        <div className="navButtonWrapper">
          <Link to="/home"><button>Home</button></Link>
          <Link to="/session/setup"><button>New</button></Link>
        </div>
      </div>
    )
  }
}
