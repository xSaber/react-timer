import React, { Component } from 'react';

import Clock from '../components/Clock';

/**
 * Timer component
 * Starts timer for a specific amount of time
 */
export default class Timer extends Component {
    render () {
        return (
            <div>
                <h1>Timer</h1>
                <Clock />
            </div>
        );
    }
}
