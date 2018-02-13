/* global describe, test, expect */

import reducer, { addTomatoro } from './tomatoros';

describe('Tomatoros Reducer', () => {

    test('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' });
        expect(result).toEqual({ tomatoros: 0 });
    });

    test('should increase tomatoros state value', () => {

        const startState = { tomatoros: 0 };
        const action = addTomatoro();

        const expectedStateAfterOnce = { tomatoros: 1 };
        const expectedStateAfterTwice = { tomatoros: 2 };
        const expectedStateAfterThrice = { tomatoros: 3 };

        const resultAfterOnce = reducer(startState, action);
        const resultAfterTwice = reducer(resultAfterOnce, action);
        const resultAfterThrice = reducer(resultAfterTwice, action);

        expect(resultAfterOnce).toEqual(expectedStateAfterOnce);
        expect(resultAfterTwice).toEqual(expectedStateAfterTwice);
        expect(resultAfterThrice).toEqual(expectedStateAfterThrice);

    });

});
