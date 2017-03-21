import React, { Component } from 'react';
import { Link } from 'react-router';
import './Setup.css';

export default class Setup extends Component {

  handleClick() {
    if (!this.newActivity.value) {
      return false;
    }

    this.addActivity();
  }


  handlePress(e) {
    if (e.key === "Enter" && this.newActivity.value) {
      this.addActivity();
    }
  }


  addActivity() {
    const newActivity = {
      id: Date.now(),
      details: this.newActivity.value,
      timerOn: false,
      time: 0
    }

    this.props.addActivity(newActivity);
    this.newActivity.value = "";
  }



  componentWillMount() {
    this.props.clearActivities();
  }



  deleteItem(id) {
    this.props.deleteActivity(id);
  }



  render () {
    let activities = this.props.activities.length === 0 ? null : this.props.activities.map((a, i) => {
      let text = a.details;

      return (
        <div className="activity" key={a.id}>
          <p>{text}</p>
          <button onClick={this.deleteItem.bind(this, a.id)}>x</button>
        </div>
      )
    })


    return (
      <div className="setupWrapper">
        <div className="activitiesWrapper">
          {activities}
        </div>
        <div className="newActivityWrapper">
          <input onKeyUp={this.handlePress.bind(this)} 
                 ref={el => this.newActivity = el} 
                 placeholder="Activity" 
          />
          <button onClick={this.handleClick.bind(this)} >Add</button>
        </div>
        <Link to="/session/active"><button id="startActivity">Start</button></Link>
      </div>
    )
  }
}
