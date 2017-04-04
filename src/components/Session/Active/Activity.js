import React, { Component } from 'react';


/**
 * @param {Number} [key] Activity id for UI maintenance over renders
 * @param {Number} [id] Activity id 
 * @param {Number} [time] Active time in seconds
 * @param {String} [details] Describes activity
 * @param {Function} [convertTime] Converts seconds to readable format
 * @param {Function} [toggleActivity] Fires action to toggle activity timer
 * 
 * @module Activity
 * @type {ReactClass}
 */
class Activity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }



    handleClick() {
        this.toggleTimer()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    

    toggleTimer() {
        this.setState({
            active: !this.state.active
        })
        this.props.toggleActivity(this.props.id)
    }

    render() {
        return (
            <div className="activeActivity">

                <div className="activityDetails">
                    <p>{this.props.details}</p>
                </div>
                 
                <div className="activityTimer">
                    {this.props.convertTime(this.props.time)}
                </div>

                <div className="buttonWrapper"> 
                    <button onClick={this.handleClick.bind(this)}>
                        {this.state.active ? "Stop" : "Start"}
                    </button>
                </div>    
                
            </div>
        );
    }
};

export default Activity;