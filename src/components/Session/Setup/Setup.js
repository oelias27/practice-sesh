import React, { Component } from 'react';
import { Link } from 'react-router';
import './Setup.css';

export default class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      newActivity: "",
      index: 0
    };
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      newActivity: e.target.value
    })
  }

  handleClick() {
    const newActivity = {
      id: this.state.index,
      details: this.state.newActivity
    }

    console.log(this.state)

    this.newActivity.value = "";

    this.setState({
      activities: [...this.state.activities, newActivity],
      newActivity: "",
      index: this.state.index + 1
    })
  }

  deleteItem(index) {
    this.setState({
      ...this.state,
      activities: this.state.activities.filter((a, i) => i !== index)
    })
  }

  render () {
    let activities = this.state.activities.map((a, i) => {
      let text = a.details.length <= 10 ? a.details : a.details.substring(0, 20) + "...";

      return (
        <div className="activity" key={a.id}>
          <div>{text}</div>
          <button onClick={this.deleteItem.bind(this, i)}>x</button>
        </div>
      )
    })


    return (
      <div>
        <div className="activitiesWrapper">
          {activities}
        </div>
        <div className="newActivityWrapper">
          <input ref={el => this.newActivity = el} onChange={this.handleChange.bind(this)} placeholder="Activity" />
          <button onClick={this.handleClick.bind(this)} >Add</button>
        </div>
        <Link to="/session/active"><button>Start</button></Link>
      </div>
    )
  }
}
