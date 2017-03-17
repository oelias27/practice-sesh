import React, { Component } from 'react';

export default class Session extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: 'world'
    }
  }

  render () {

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        foo: this.state.foo
      })
    })


    return (
      <div>
        <h1>Session</h1>
        {children}
      </div>
    )
  }
}
