/* global require, describe, test, expect, jest, beforeEach, afterEach */

import {
    LONG_BREAK_DURATION_UPDATE,
    RESET_SETTINGS,
    SHORT_BREAK_DURATION_UPDATE,
    WORK_DURATION_UPDATE
} from '../constants';

const mockGetSettings = jest.fn(() => undefined);
const mockSaveSettings = jest.fn();
const mockDropSettings = jest.fn();

const mockResetTimer = jest.fn();

jest.mock('../lib/settings', () => {
    return { getSettings: mockGetSettings, saveSettings: mockSaveSettings, dropSettings: mockDropSettings }
});

jest.mock('./timer', () => {
    return { resetTimer: mockResetTimer }
});

describe('Settings Reducer', () => {

    let reducer;

    beforeEach(() => {
        reducer = require('./settings').default;
    });

    afterEach(() => {
        mockGetSettings.mockClear();
        mockGetSettings.mockRestore();

        mockSaveSettings.mockClear();
        mockSaveSettings.mockRestore();

        mockDropSettings.mockClear();
        mockDropSettings.mockRestore();

        mockResetTimer.mockClear();
        mockResetTimer.mockRestore();

        jest.resetModules();
    });

    test('returns a state object', () => {
        const result = reducer(undefined, {});

        expect(result).toEqual({
            workDuration: 25 * 60,
            shortBreakDuration: 5 * 60,
            longBreakDuration: 15 * 60,
            isModalOpen: false
        });

        expect(mockGetSettings).toHaveBeenCalledTimes(1);
    });

    test('#updateAndSaveWorkDuration', () => {
        const dispatch = jest.fn();
        const getState = () => ({});

        const { updateAndSaveWorkDuration } = require('./settings');

        updateAndSaveWorkDuration(666)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: WORK_DURATION_UPDATE, payload: 666 });

        expect(mockSaveSettings).toHaveBeenCalledTimes(1);
        expect(mockResetTimer).toHaveBeenCalledTimes(1);
    });

    test('#updateAndSaveShortBreakDuration', () => {
        const dispatch = jest.fn();
        const getState = () => ({});

        const { updateAndSaveShortBreakDuration } = require('./settings');

        updateAndSaveShortBreakDuration(13)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: SHORT_BREAK_DURATION_UPDATE, payload: 13 });

        expect(mockSaveSettings).toHaveBeenCalledTimes(1);
        expect(mockResetTimer).toHaveBeenCalledTimes(1);
    });

    test('#updateAndSaveLongBreakDuration', () => {
        const dispatch = jest.fn();
        const getState = () => ({});

        const { updateAndSaveLongBreakDuration } = require('./settings');

        updateAndSaveLongBreakDuration(38)(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: LONG_BREAK_DURATION_UPDATE, payload: 38 });

        expect(mockSaveSettings).toHaveBeenCalledTimes(1);
        expect(mockResetTimer).toHaveBeenCalledTimes(1);
    });

    test('#resetAndSaveSettings', () => {
        const dispatch = jest.fn();
        const getState = () => ({});

        const { resetAndSaveSettings } = require('./settings');

        resetAndSaveSettings()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: RESET_SETTINGS });

        expect(mockDropSettings).toHaveBeenCalledTimes(1);
        expect(mockSaveSettings).toHaveBeenCalledTimes(1);
        expect(mockResetTimer).toHaveBeenCalledTimes(1);
    });


});
