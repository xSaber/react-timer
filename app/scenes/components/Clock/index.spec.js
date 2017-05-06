import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Clock from './';

describe('Clock', () => {

    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={69} />);

            let clockElement = ReactDOM.findDOMNode(clock);
            expect(TestUtils.isDOMComponent(clockElement)).toBe(true);
        });
    });

    describe('formatSeconds', () => {
        var clock;

        before(() => {
            clock = TestUtils.renderIntoDocument(<Clock />);
        })

        it('should format seconds', () => {
            let seconds = 670,
                expected = '11:10',
                actual = clock.formatSeconds(seconds);

            expect(actual).toBeA('string');
            expect(actual).toBe(expected);
        });

        it('should format seconds where \'min:sec\' less than 10', () => {
            let seconds = 364,
                expected = '06:04',
                actual = clock.formatSeconds(seconds);

            expect(actual).toBeA('string');
            expect(actual).toBe(expected);
        });
    });
});
