import React, { Component } from 'react';

import Activity from './Activity';
import Notes from './Notes.js';

import './Active.css';

/**
 *  * Redux *
 * @param {Array} [activities] Activity object for tracking time
 * @param {Number} [time] Active time in seconds
 * 
 * @module Active
 * @type {ReactClass}
 */
export default class Active extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: ""
    }

    this.toggleActivity = this.toggleActivity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  

  componentWillMount() {
    this.timer = setInterval(() => {
      this.props.tick(this.state.notes);
    }, 1000);
  }



  componentWillUnmount() {
    clearInterval(this.timer);
  }



  handleChange(e) {
    this.setState({
      notes: e.target.value
    })
  }



  convertTime(s) {
    const getMinutes = (s) => {
      let minutes = Math.floor(s / 60).toString();


      return minutes.length > 1 ? minutes : '0' + minutes;

    } 

    const getHours = (m) => {
      const hours = Math.floor(m / 60).toString();
      
      return hours.length > 1 ? hours : '0' + hours;
    } 

    const getSeconds = (s) => {
      const seconds = (s % 60).toString();

      return seconds.length > 1 ? seconds : '0' + seconds;
    }
    
    const seconds = getSeconds(s);
    const minutes = getMinutes(s);
    const hours = getHours(minutes);

    return `${hours}:${minutes}:${seconds}`;
  }



  toggleActivity(id) {
    this.props.toggleActivity(id);
  }



  render () {
    let activities = this.props.activities.map((a) => {
      return (
        <Activity 
          key={a.id} 
          id={a.id} 
          time={a.time}
          details={a.details} 
          convertTime={this.convertTime}
          toggleActivity={this.toggleActivity}
        />
      )
    });

    return (
      <div className="activeWrapper">

        <div className="activeActivitiesWrapper">
          <div id="activeTimer">
            {this.convertTime(this.props.time)}
          </div>

          {activities}
        </div>

        <Notes handleChange={this.handleChange} />

      </div>
    )
  }
}
