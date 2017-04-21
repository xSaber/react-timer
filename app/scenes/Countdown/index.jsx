import React, { Component } from 'react';

import Clock from '../components/Clock';

/**
 * Countdown component
 * Starts countdown for a specific amount of time
 */
export default class Countdown extends Component {
    render () {
        return (
            <div>
                <h1>Countdown</h1>
                <Clock />
            </div>
        );
    }
}
