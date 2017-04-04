import React, { Component } from 'react';
import generateHistory from './generateHistory';

import Cell from './Cell/Cell.js';

import './Activity.css';

/**
 * Activity graph component.
 * Wrapper for history activity chart. 
 * 
 * children: {Cell}
 * 
 * @module Home
 * @type {ReactClass}
 */
export default class Activity extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
      history: generateHistory(),
      months: [
          'Mar', 
          'Apr', 
          'May', 
          'Jun', 
          'Jul', 
          'Aug', 
          'Sep', 
          'Nov', 
          'Dec', 
          'Jan', 
          'Feb', 
          'Mar'
        ]
    }
  }

  render() {

    let graph = this.state.history.map((date, i) => {
      return <Cell 
                key={i} 
                hoursPracticed={date.hoursPracticed}
                day={date.day}
              />
    });

    let months = this.state.months.map((month, i) => {
      return (
        <div key={i}>
          {month}
        </div>
      )
    })

    return (
      <div>
        <div className="months">
          {months}
        </div>
        <div className="graph">
          {graph}
        </div>
      </div>
    )
  }
}
