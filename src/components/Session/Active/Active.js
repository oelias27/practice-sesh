import React, { Component } from 'react';
import Activity from './Activity';

export default class Active extends Component {
  constructor(props) {
    super(props);

    console.log(this.props)
    this.state = {
      timerCount: 0
    }
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      let timerCount = this.state.timerCount + 1;
      this.setState({
        timerCount: timerCount
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  convertTime(s) {
    const getMinutes = (s) => {
      const minutes = Math.floor(s / 60).toString();

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

    return `${hours}:${minutes}:${seconds}`
  }


  render () {
    let activities = this.props.activities.map((a) => {
      return (
        <Activity key={a.id} details={a.details} />
      )
    })

    return (
      <div>
        {this.convertTime(this.state.timerCount)}
        {activities}
      </div>
    )
  }
}
