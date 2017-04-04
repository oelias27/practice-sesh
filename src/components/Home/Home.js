import React from 'react'

import Activity from './Activity/Activity.js';

/**
 * Home component.
 * Wrapper for history activity chart.
 * 
 * @module Home
 * @type {StatelessComponent}
 */
const Home = (props) => {
  return (
    <div className="homeWrapper">
      <h1>History</h1>
      <Activity />
    </div>
  )
}

export default Home;
