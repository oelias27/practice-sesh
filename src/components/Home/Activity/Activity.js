import React, { Component } from 'react';
import Cell from './Cell/Cell.js';

import './Activity.css';


export default class Activity extends Component {
  constructor(props) {
    super(props);

    let generateHistory = () => {
      let history = [];
      let currentTime = Date.now();
      let startingTime = currentTime - 32140800;

      for (let i = 0; i < 371; i++) {
        history.push(Math.floor(Math.random() * 8));
      }

      return history;
    }

    this.state = {
      history: generateHistory()
    }
  }

  render() {

    let graph = this.state.history.map((num, i) => {
      return <Cell key={i} number={num} />
    });

    return (
      <div>
        <p>Activity test</p>
        <div className="graph">
          {graph}
        </div>
      </div>
    )
  }
}
