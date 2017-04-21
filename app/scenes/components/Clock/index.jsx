import React, { Component } from 'react';

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

        return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    }

    render () {
        return <p>Clock component</p>
    }

}
