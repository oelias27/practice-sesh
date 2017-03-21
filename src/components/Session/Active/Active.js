import React, { Component } from 'react';
import Activity from './Activity';

import './Active.css';

export default class Active extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      timerCount: 0,
    }

    this.toggleActivity = this.toggleActivity.bind(this);
  }

  

  componentWillMount() {
    this.timer = setInterval(() => {
      this.props.tick();
    }, 1000);
  }



  componentWillUnmount() {
    clearInterval(this.timer);
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
        <div id="activeTimer">
          {this.convertTime(this.props.time)}
        </div>
        {activities}
      </div>
    )
  }
}
