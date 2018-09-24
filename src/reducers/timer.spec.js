/* global require, describe, test, expect, jest, beforeEach, afterEach */

import {
    TIMER_DECREASE,
    TIMER_RESET,
    TIMER_START,
    STEP_WORK,
    STEP_BREAK_SHORT,
    STEP_BREAK_LONG,
    TOMATORO_ADD, STEP_UPDATE, TIMER_UPDATE
} from '../constants';

const mockGetSettings = jest.fn(() => undefined);
const mockSaveSettings = jest.fn();
const mockDropSettings = jest.fn();

const mockSendNotification = jest.fn();

const mockUpdateTitle = jest.fn();

const mockSleepASecond = jest.fn(() => {
    return new Promise((resolve) => {
        process.nextTick(resolve);
    });
});

jest.mock('../lib/clock', () => {
    return { sleepASecond: mockSleepASecond }
});

jest.mock('../lib/title', () => {
    return { updateTitle: mockUpdateTitle }
});

jest.mock('../lib/notification', () => {
    return { sendNotification: mockSendNotification }
});

jest.mock('../lib/settings', () => {
    return { getSettings: mockGetSettings, saveSettings: mockSaveSettings, dropSettings: mockDropSettings }
});

describe('Timer Reducer', () => {

    let reducer;

    beforeEach(() => {
        reducer = require('./timer').default;
    });

    afterEach(() => {
        mockGetSettings.mockClear();
        mockGetSettings.mockRestore();

        mockSaveSettings.mockClear();
        mockSaveSettings.mockRestore();

        mockDropSettings.mockClear();
        mockDropSettings.mockRestore();

        mockSendNotification.mockClear();
        mockSendNotification.mockRestore();

        mockUpdateTitle.mockClear();
        mockUpdateTitle.mockRestore();

        jest.resetModules();
    });

    test('returns a state object', () => {
        const result = reducer(undefined, {});

        expect(result).toEqual({
            time: 1500,
            isRunning: false,
            step: STEP_WORK
        });

        expect(mockGetSettings).toHaveBeenCalledTimes(1);
    });

    test('#decreaseTimer', () => {
        const action = require('./timer').decreaseTimer();
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

    test.skip('#resetTimer', () => {
        const action = require('./timer').resetTimer();
        const startState = { time: 99, isRunning: true };
        const expectedState = { time: 1500, isRunning: false };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });

    test.skip('#turnTimerOn', () => {
        const action = require('./timer').turnTimerOn();
        const startState = { isRunning: false };
        const expectedState = { isRunning: true };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });

    test.skip('#stopTimer', () => {
        const action = require('./timer').stopTimer();
        const startState = { isRunning: true };
        const expectedState = { isRunning: false };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });

    test('#updateTimer', () => {
        const action = require('./timer').updateTimer(15);
        const startState = { time: 10 };
        const expectedState = { time: 15 };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });

    describe('#updateStep', () => {

        test('should update state from STEP_WORK to STEP_BREAK_SHORT', () => {
            const action = require('./timer').updateStep(STEP_BREAK_SHORT);
            const startState = { step: STEP_WORK };
            const expectedState = { isRunning: false, step: 'STEP_BREAK_SHORT', time: 1500 };
            const result = reducer(startState, action);
            expect(result).toEqual(expectedState);
        });

        test('should update state from STEP_BREAK_SHORT to STEP_BREAK_LONG', () => {
            const action = require('./timer').updateStep(STEP_BREAK_LONG);
            const startState = { step: STEP_BREAK_SHORT };
            const expectedState = { isRunning: false, step: 'STEP_BREAK_LONG', time: 1500 };
            const result = reducer(startState, action);
            expect(result).toEqual(expectedState);
        });

    });

    describe.skip('#updateStepAndTimer', () => {

        let dispatch;
        let getState;

        beforeEach(() => {
            dispatch = jest.fn();
            getState = jest.fn(() => ({
                settings: {
                    step: 'ANYTHING',
                    workDuration: 666,
                    shortBreakDuration: 777,
                    longBreakDuration: 888
                }
            }));
        });

        afterEach(() => {
            dispatch.mockClear();
            dispatch.mockRestore();

            getState.mockClear();
            getState.mockRestore();
        });

        test('with STEP_WORK as step value', () => {
            require('./timer').updateStepAndTimer(STEP_WORK)(dispatch, getState);

            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(getState).toHaveBeenCalledTimes(1);

            expect(dispatch.mock.calls[ 0 ]).toEqual([ { type: STEP_UPDATE, payload: STEP_WORK } ]);
            expect(dispatch.mock.calls[ 1 ]).toEqual([ { type: TIMER_UPDATE, payload: 666 } ]);
        });

        test('with STEP_BREAK_SHORT as step value', () => {
            require('./timer').updateStepAndTimer(STEP_BREAK_SHORT)(dispatch, getState);

            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(getState).toHaveBeenCalledTimes(1);

            expect(dispatch.mock.calls[ 0 ]).toEqual([ { type: STEP_UPDATE, payload: STEP_BREAK_SHORT } ]);
            expect(dispatch.mock.calls[ 1 ]).toEqual([ { type: TIMER_UPDATE, payload: 777 } ]);
        });

        test('with STEP_BREAK_LONG as step value', () => {
            require('./timer').updateStepAndTimer(STEP_BREAK_LONG)(dispatch, getState);

            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(getState).toHaveBeenCalledTimes(1);

            expect(dispatch.mock.calls[ 0 ]).toEqual([ { type: STEP_UPDATE, payload: STEP_BREAK_LONG } ]);
            expect(dispatch.mock.calls[ 1 ]).toEqual([ { type: TIMER_UPDATE, payload: 888 } ]);
        });
    });

    test('#startTimer', () => {
        const dispatch = jest.fn();

        require('./timer').startTimer()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({ type: TIMER_START });
        expect(dispatch).toHaveBeenCalledTimes(2);
    });

    describe.skip('#processTimer', () => {

        test('with TIMER_STATUS_ON', () => {
            const dispatch = jest.fn();
            const getState = jest.fn(() => ({ timer: { isRunning: true, time: 666 } }));

            return require('./timer').processTimer()(dispatch, getState).then(() => {
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(getState).toHaveBeenCalledTimes(1);
                expect(mockUpdateTitle).toHaveBeenCalledTimes(1);
                expect(mockUpdateTitle).toHaveBeenCalledWith(666);
            });
        });

        test('with TIMER_STATUS_OFF', () => {
            const dispatch = jest.fn();
            const getState = jest.fn(() => ({ timer: { isRunning: false, time: 666 } }));

            return require('./timer').processTimer()(dispatch, getState).then(() => {
                expect(dispatch).toHaveBeenCalledTimes(1);
                expect(getState).toHaveBeenCalledTimes(1);
                expect(mockUpdateTitle).toHaveBeenCalledTimes(1);
                expect(mockUpdateTitle).toHaveBeenCalledWith(); // should invoke it with no params
            });
        });

    });

    describe('#tickTimer', () => {

        test('with timer OFF', () => {
            const dispatch = jest.fn();
            const getState = () => ({ timer: { isRunning: false } });

            require('./timer').tickTimer()(dispatch, getState);

            expect(dispatch).not.toHaveBeenCalled();
        });

        test('with timer ON and more than 0 seconds remaining', () => {
            const dispatch = jest.fn();
            const getState = () => ({ timer: { time: 10, isRunning: true } });

            require('./timer').tickTimer()(dispatch, getState);

            expect(dispatch).toHaveBeenCalledWith({ type: TIMER_DECREASE });
            expect(dispatch).toHaveBeenCalledTimes(1);
        });

        test('with timer ON and exactly 0 seconds remaining', () => {
            const dispatch = jest.fn();
            const getState = () => ({ timer: { time: 0, isRunning: true, step: STEP_WORK } });

            require('./timer').tickTimer()(dispatch, getState);

            expect(dispatch.mock.calls).toEqual([
                [ { type: TIMER_DECREASE } ],
                [ { type: TOMATORO_ADD } ],
                [ { type: TIMER_RESET } ],
            ]);
        });

    });

});
