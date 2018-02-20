import { getSettings, saveSettings, dropSettings } from '../lib/settings';
import { resetTimer } from './timer';

const initState = () => {
    return getSettings() || {
        workDuration: 25 * 60,
        shortBreakDuration: 5 * 60,
        longBreakDuration: 15 * 60,
        isModalOpen: false
    };
};

const WORK_DURATION_UPDATE = 'WORK_DURATION_UPDATE';
const SHORT_BREAK_DURATION_UPDATE = 'SHORT_BREAK_DURATION_UPDATE';
const LONG_BREAK_DURATION_UPDATE = 'LONG_BREAK_DURATION_UPDATE';
const RESET_SETTINGS = 'RESET_SETTINGS';
const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const updateWorkDuration = (newDuration) => ({ type: WORK_DURATION_UPDATE, payload: newDuration });
export const updateShortBreakDuration = (newDuration) => ({ type: SHORT_BREAK_DURATION_UPDATE, payload: newDuration });
export const updateLongBreakDuration = (newDuration) => ({ type: LONG_BREAK_DURATION_UPDATE, payload: newDuration });
export const resetAllSettings = () => ({ type: RESET_SETTINGS });
export const toggleModal = () => ({ type: TOGGLE_MODAL });

export const updateAndSaveWorkDuration = (newDuration) => {
    return (dispatch, getState) => {
        dispatch(updateWorkDuration(newDuration));

        const settings = getState().settings;
        saveSettings(settings);

        dispatch(resetTimer());
    };
};

export const updateAndSaveShortBreakDuration = (newDuration) => {
    return (dispatch, getState) => {
        dispatch(updateShortBreakDuration(newDuration));

        const settings = getState().settings;
        saveSettings(settings);

        dispatch(resetTimer());
    };
};

export const updateAndSaveLongBreakDuration = (newDuration) => {
    return (dispatch, getState) => {
        dispatch(updateLongBreakDuration(newDuration));

        const settings = getState().settings;
        saveSettings(settings);

        dispatch(resetTimer());
    };
};

export const resetAndSaveSettings = () => {
    return (dispatch, getState) => {
        dropSettings();
        dispatch(resetAllSettings());

        const settings = getState().settings;
        saveSettings(settings);

        dispatch(resetTimer());
    };
};

export default (state = initState(), action) => {
    switch (action.type) {
        case WORK_DURATION_UPDATE:
            return { ...state, workDuration: action.payload };
        case SHORT_BREAK_DURATION_UPDATE:
            return { ...state, shortBreakDuration: action.payload };
        case LONG_BREAK_DURATION_UPDATE:
            return { ...state, longBreakDuration: action.payload };
        case RESET_SETTINGS:
            return initState();
        case TOGGLE_MODAL:
            return { ...state, isModalOpen: !state.isModalOpen };
        default:
            return state;
    }
};
