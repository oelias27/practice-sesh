import React, { Component } from 'react';

export default class Session extends Component {

  render () {

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, this.props)
    })


    return (
      <div>
        <h1>Session</h1>
        {children}
      </div>
    )
  }
}
