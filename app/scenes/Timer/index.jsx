import React, { Component } from 'react';

import Clock from '../components/Clock';

/**
 * Timer component
 * Starts timer for a specific amount of time
 */
export default class Timer extends Component {
    render () {
        return (
            <div className="clock">
                <Clock />
            </div>
        );
    }
}
