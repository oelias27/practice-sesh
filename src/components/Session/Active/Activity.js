import React, { Component } from 'react';

class Activity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            timerCount: 0
        }
    }



    handleClick() {
        this.toggleTimer()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    

    toggleTimer() {
        if (this.state.active) {
            clearInterval(this.timer);
        }
        else {
            this.timer = setInterval(() => {
                let timerCount = this.state.timerCount + 1;
                this.setState({
                    ...this.state,
                    timerCount: timerCount
                })
            }, 1000)
        }

        this.setState({
            ...this.state,
            active: !this.state.active
        })   
    }

    render() {
        return (
            <div>
                {this.props.details} 
                <button onClick={this.handleClick.bind(this)}>{this.state.active ? "Stop" : "Start"}</button>
                {this.props.convertTime(this.state.timerCount)}
            </div>
        );
    }
};

export default Activity;