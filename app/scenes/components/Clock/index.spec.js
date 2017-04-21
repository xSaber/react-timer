import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Clock from './';

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            let clock = TestUtils.renderIntoDocument(<Clock />);

            let seconds = 664,
                expected = '11:04',
                actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});
