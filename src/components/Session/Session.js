import React, { Component } from 'react';

import './Session.css';

export default class Session extends Component {

  render () {

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, this.props)
    })


    return (
      <div id="sessionWrapper">
        <h1>Session</h1>
        {children}
      </div>
    )
  }
}
