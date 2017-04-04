import React from 'react';

import './Session.css';

/**
 *  * Redux *
 * @param {Number} [time] Session runtime in seconds
 * @param {Array} [activities] Activity object for tracking time
 *
 * @module Session
 * @type {StatelessComponent}
 */
const Session = (props) => {
    const children = React.Children.map(props.children, (child) => {
      return React.cloneElement(child, props)
    })


    return (
      <div id="sessionWrapper">
        <h1>Session</h1>
        {children}
      </div>
    )
}

export default Session;
