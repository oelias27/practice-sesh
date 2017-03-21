import React, { Component } from 'react';

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
        // if (this.state.active) {
        //     clearInterval(this.timer);
        // }
        // else {
        //     this.timer = setInterval(() => {
        //         let timerCount = this.state.timerCount + 1;
        //         this.setState({
        //             ...this.state,
        //             timerCount: timerCount
        //         })
        //     }, 1000)
        // }

        // this.setState({
        //     ...this.state,
        //     active: !this.state.active
        // })   
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