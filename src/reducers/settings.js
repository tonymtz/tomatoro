import { getSettings, saveSettings, resetSettings } from '../lib/settings';

const initState = () => {
    return getSettings() || {
        workDuration: 25 * 60,
        shortBreakDuration: 5 * 60,
        longBreakDuration: 15 * 60
    };
};

const WORK_DURATION_UPDATE = 'WORK_DURATION_UPDATE';
const SHORT_BREAK_DURATION_UPDATE = 'SHORT_BREAK_DURATION_UPDATE';
const LONG_BREAK_DURATION_UPDATE = 'LONG_BREAK_DURATION_UPDATE';
const RESET_SETTINGS = 'RESET_SETTINGS';

export const updateWorkDuration = (newDuration) => ({ type: WORK_DURATION_UPDATE, payload: newDuration });
export const updateShortBreakDuration = (newDuration) => ({ type: SHORT_BREAK_DURATION_UPDATE, payload: newDuration });
export const updateLongBreakDuration = (newDuration) => ({ type: LONG_BREAK_DURATION_UPDATE, payload: newDuration });
export const resetAllSettings = () => ({ type: RESET_SETTINGS });

export default (state = initState(), action) => {
    let newState;

    switch (action.type) {
        case WORK_DURATION_UPDATE:
            newState = { ...state, workDuration: action.payload };
            saveSettings(newState);
            return newState;
        case SHORT_BREAK_DURATION_UPDATE:
            newState = { ...state, shortBreakDuration: action.payload };
            saveSettings(newState);
            return newState;
        case LONG_BREAK_DURATION_UPDATE:
            newState = { ...state, longBreakDuration: action.payload };
            saveSettings(newState);
            return newState;
        case RESET_SETTINGS:
            resetSettings();
            newState = initState();
            saveSettings(newState);
            return newState;
        default:
            return state;
    }
};
