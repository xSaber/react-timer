import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {

    constructor (props) {
        super(props);

        this.formatSeconds = this.formatSeconds.bind(this);
    }

    /**
     * Takes total amount of seconds, counts for minutes and seconds then
     * returns result as a "minutes":"seconds" string
     * @param  {Number} totalSeconds total amount of seconds
     * @return {String}              "minutes":"seconds" string to display
     */
    formatSeconds (totalSeconds) {
        let seconds = totalSeconds % 60,
            minutes = Math.floor(totalSeconds / 60);

        // slicing here adds trailing '0' for 01:01 like-cases, instead of returning 1:1
        return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    }

    render () {
        let { totalSeconds } = this.props;

        return (
            <div className="clock__display display">
                <span className="display__indication">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }

}

Clock.defaultProps = {
    totalSeconds: 0
}

Clock.propTypes = {
    totalSeconds: PropTypes.number
}
