import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class TimeInput extends Component {

    constructor (props) {
        super(props);

        this.state = {
            seconds: undefined
        }

        this.submitTime = this.submitTime.bind(this);
    }

    submitTime (e) {
        e.preventDefault();
        let stringSeconds = this.countdownInput.value;

        // Restrict the input value to be numbers only
        if (!stringSeconds.match(/^[0-9]+$/)) {
            return;
        }

        this.countdownInput.value = '';
        this.props.onSetCountdown(parseInt(stringSeconds, 10));
    }

    render () {

        return (
            <div className="clock__time-input time-input">
                <form ref="form" onSubmit={this.submitTime} className="time-input__form">
                    <FormGroup>
                        <FormControl type="text" inputRef={ref => { this.countdownInput = ref; }} />
                    </FormGroup>
                    <Button type="submit" className="time-input__submit" bsStyle="primary" block>Start</Button>
                </form>
            </div>
        );
    }

}

// Clock.defaultProps = {
//
// }
//
// Clock.propTypes = {
//
// }
