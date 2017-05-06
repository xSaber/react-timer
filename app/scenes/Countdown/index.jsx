import React, { Component } from 'react';

import Clock from '../components/Clock';
import TimeInput from './components/TimeInput';

/**
 * Countdown component
 * Starts countdown for a specific amount of time
 */
export default class Countdown extends Component {

    constructor (props) {
        super(props);

        this.state = {
            count: 0
        };

        this.handleSetCountdown = this.handleSetCountdown.bind(this);
    }

    handleSetCountdown (seconds) {
        this.setState({
            count: seconds
        });
    }

    render () {
        return (
            <div className="clock">
                <Clock totalSeconds={this.state.count} />
                <TimeInput onSetCountdown={this.handleSetCountdown} />
            </div>
        );
    }
}
