import React, { Component } from 'react';

import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false
        }

        this.toggleToolTip = this.toggleToolTip.bind(this);
        this.getColor = this.getColor.bind(this);
    }



    toggleToolTip() {
        this.setState({
            hovered: !this.state.hovered
        })
    }



    getColor(number) {
        let color = null;

        if (1 <= number && number <= 3) {
            color = "lightgreen"
        }
        else if (3 <= number && number <= 5) {
            color = "green"
        }
        else if (5 <= number) {
            color = "darkgreen"
        }
        else {
            color = "lightgray"
        }

        return color;
    }



    render() {
        return (
            <div 
                className="activity-cell" 
                onMouseEnter={this.toggleToolTip} 
                onMouseLeave={this.toggleToolTip}
                style={{backgroundColor: this.getColor(this.props.stats.hoursPracticed)}}
            >
                <div 
                    className={this.state.hovered ? "active-tooltip" : "hidden-tooltip"}                    
                >
                    {`${this.props.stats.hoursPracticed} hour(s) practiced on ${this.props.stats.day} `}
                    <div className="pointer">
                    </div>
                </div>
            </div>
        );
    }
}

export default Cell;