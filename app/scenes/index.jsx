import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Timer from './Timer';
import Countdown from './Countdown';

/**
 * Routing component
 * Contains all App's routes
 */
export default class Scenes extends Component {
    render () {
        return (
            <Router>
                <div>
                    {this.props.children}
                    <div className="container">
                        <Route exact path="/" component={Timer} />
                        <Route path="/countdown" component={Countdown} />
                    </div>
                </div>
            </Router>
        );
    }
}
