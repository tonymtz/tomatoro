/* global describe, test, expect, jest */

import reducer, {
    decreaseTimer,
    resetTimer,
    turnTimerOn,
    updateStep,
    tickTimer,
    startTimer,
    processTimer
} from './timer';

import {
    TIMER_DECREASE,
    TIMER_RESET,
    TIMER_START,
    STEP_WORK,
    STEP_BREAK_SHORT,
    STEP_BREAK_LONG
} from './timer';

import { TOMATORO_ADD } from './tomatoros';

jest.mock('../lib/notification', () => {
    return { sendNotification: jest.fn() }
});

jest.mock('../lib/settings', () => {
    return { getSettings: jest.fn() }
});

describe('Timer Reducer', () => {

    test('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' });
        expect(result).toEqual({ time: 1500, isRunning: false, step: STEP_WORK });
    });

    test('#decreaseTimer', () => {
        const action = decreaseTimer();
        const startState = { time: 10 };

        const expectedStateAfterOnce = { time: 9 };
        const expectedStateAfterTwice = { time: 8 };
        const expectedStateAfterThrice = { time: 7 };

        const resultAfterOnce = reducer(startState, action);
        const resultAfterTwice = reducer(resultAfterOnce, action);
        const resultAfterThrice = reducer(resultAfterTwice, action);

        expect(resultAfterOnce).toEqual(expectedStateAfterOnce);
        expect(resultAfterTwice).toEqual(expectedStateAfterTwice);
        expect(resultAfterThrice).toEqual(expectedStateAfterThrice);
    });

    test('#resetTimer', () => {
        const action = resetTimer();
        const startState = { time: 99, isRunning: true };
        const expectedState = { time: 1500, isRunning: false };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });

    test('#turnTimerOn', () => {
        const action = turnTimerOn();
        const startState = { isRunning: false };
        const expectedState = { isRunning: true };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });

    describe('#updateStep', () => {

        test('should update state from STEP_WORK to STEP_BREAK_SHORT', () => {
            const action = updateStep(STEP_BREAK_SHORT);
            const startState = { step: STEP_WORK };
            const expectedState = { isRunning: false, step: 'STEP_BREAK_SHORT', time: 1500 };
            const result = reducer(startState, action);
            expect(result).toEqual(expectedState);
        });

        test('should update state from STEP_BREAK_SHORT to STEP_BREAK_LONG', () => {
            const action = updateStep(STEP_BREAK_LONG);
            const startState = { step: STEP_BREAK_SHORT };
            const expectedState = { isRunning: false, step: 'STEP_BREAK_LONG', time: 1500 };
            const result = reducer(startState, action);
            expect(result).toEqual(expectedState);
        });

    });

    test('#startTimer', () => {
        const dispatch = jest.fn();

        startTimer()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({ type: TIMER_START });
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    describe('#processTimer', () => {

        test('with TIMER_STATUS_ON', () => {
            const dispatch = jest.fn();
            const getState = () => ({ timer: { status: TIMER_STATUS_ON } });

            processTimer()(dispatch, getState).then(() => {
                expect(dispatch).toHaveBeenCalledTimes(2);
            });
        });

        test('with TIMER_STATUS_OFF', () => {
            const dispatch = jest.fn();
            const getState = () => ({ timer: { status: TIMER_STATUS_OFF } });

            processTimer()(dispatch, getState).then(() => {
                expect(dispatch).toHaveBeenCalledTimes(1);
            });
        });

    });

    describe('#tickTimer', () => {

        test('with timer OFF', () => {
            const dispatch = jest.fn();
            const getState = () => ({ timer: { isRunning: false } });

            tickTimer()(dispatch, getState);

            expect(dispatch).not.toHaveBeenCalled();
        });

        test('with timer ON and more than 0 seconds remaining', () => {
            const dispatch = jest.fn();
            const getState = () => ({ timer: { time: 10, isRunning: true } });

            tickTimer()(dispatch, getState);

            expect(dispatch).toHaveBeenCalledWith({ type: TIMER_DECREASE });
            expect(dispatch).toHaveBeenCalledTimes(1);
        });

        test('with timer ON and exactly 0 seconds remaining', () => {
            const dispatch = jest.fn();
            const getState = () => ({ timer: { time: 0, isRunning: true, step: STEP_WORK } });

            tickTimer()(dispatch, getState);

            expect(dispatch.mock.calls).toEqual([
                [ { type: TIMER_DECREASE } ],
                [ { type: TOMATORO_ADD } ],
                [ { type: TIMER_RESET } ],
            ]);
        });

    });

});
