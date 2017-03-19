import React, { Component } from 'react';
import moment from 'moment';

import Cell from './Cell/Cell.js';

import './Activity.css';


export default class Activity extends Component {
  constructor(props) {
    super(props);

    let generateHistory = () => {
      let history = [];
      let currentTime = Date.now() / 1000;
      let startingTime = currentTime - 32140800;

      for (let i = 0; i < 371; i++) {

        let dayStats = {
          day: moment.unix(startingTime).format("dddd, MMMM Do YYYY"),
          hoursPracticed: Math.floor(Math.random() * 8)
        }

        history.push(dayStats);

        startingTime += 86400;
      }

      return history;
    }

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

    let graph = this.state.history.map((day, i) => {
      return <Cell key={i} stats={day} />
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
        <p>Activity test</p>
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
