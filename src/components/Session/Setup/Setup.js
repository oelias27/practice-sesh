import React, { Component } from 'react';
import { Link } from 'react-router';
import './Setup.css';

export default class Setup extends Component {

  handleClick() {
    const newActivity = {
      id: Date.now(),
      details: this.newActivity.value
    }

    this.props.addActivity(newActivity)
    this.newActivity.value = "";
  }



  componentWillMount() {
    this.props.clearActivities()
  }



  deleteItem(id) {
    this.props.deleteActivity(id);
  }



  render () {
    let activities = this.props.activities.length === 0 ? null : this.props.activities.map((a, i) => {
      let text = a.details.length <= 10 ? a.details : a.details.substring(0, 20) + "...";

      return (
        <div className="activity" key={a.id}>
          <div>{text}</div>
          <button onClick={this.deleteItem.bind(this, a.id)}>x</button>
        </div>
      )
    })


    return (
      <div>
        <div className="activitiesWrapper">
          {activities}
        </div>
        <div className="newActivityWrapper">
          <input ref={el => this.newActivity = el} placeholder="Activity" />
          <button onClick={this.handleClick.bind(this)} >Add</button>
        </div>
        <Link to="/session/active"><button>Start</button></Link>
      </div>
    )
  }
}
