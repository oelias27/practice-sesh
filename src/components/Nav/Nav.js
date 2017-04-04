import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
  
import './Nav.css';

/**
 * 
 *  * Redux *
 * @param {String} [username] Authenticated user's username for display
 * @param {Boolean} [authenticated] Determines if Nav should render
 * 
 * 
 * @module Nav
 * @type {ReactClass}
 */
export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logOut();
    browserHistory.push('/login');
  }

  render () {
    if (!this.props.authenticated) {
      return false;
    }

    return (
      <div className="nav">

          <Link to="/home" style={{textDecoration: 'none'}}>
            <div className="navLink">
              Practice Sesh
            </div>
          </Link>



          <div id="navLinkWrapper">

            <Link to="/session/setup" style={{textDecoration: 'none'}}>
              <div className="navLink">
                New
              </div>
            </Link>

            <Link to="/home" style={{textDecoration: 'none'}}>
              <div className="navLink">
                History
              </div>
            </Link>
            
          </div>


          <div className="userControls">
            <p className="navLink">
              {this.props.username}
            </p>
            <i className="fa fa-sign-out fa-1x navLink" onClick={this.handleClick} ></i>
          </div>
      </div>
    )
  }
}
