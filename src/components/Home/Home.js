import React, { Component } from 'react'

import Activity from './Activity/Activity.js';

export default class Home extends Component {
  render () {
    return (
      <div className="homeWrapper">
        <Activity />
      </div>
    )
  }
}
