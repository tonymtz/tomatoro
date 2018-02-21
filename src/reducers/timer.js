import {
    STEP_WORK,
    STEP_BREAK_LONG,
    STEP_BREAK_SHORT,
    STEP_UPDATE,
    TIMER_DECREASE,
    TIMER_RESET,
    TIMER_START, TIMER_STOP,
    TIMER_UPDATE
} from './constants';

import { addTomatoro } from './tomatoros';
import { sleepASecond } from '../lib/clock';
import { getSettings } from '../lib/settings';
import { updateTitle } from '../lib/title';
import { sendNotification } from '../lib/notification';

const initState = (currentState = {}) => {
    const state = {
        time: 25 * 60,
        isRunning: false,
        step: STEP_WORK
    };

    const settings = getSettings();
    if (settings) {
        if (currentState.step === STEP_BREAK_LONG) {
            state.time = settings.longBreakDuration;
        } else if (currentState.step === STEP_BREAK_SHORT) {
            state.time = settings.shortBreakDuration;
        } else {
            state.time = settings.workDuration;
        }
    }
    return state;
};

export const decreaseTimer = () => ({ type: TIMER_DECREASE });
export const resetTimer = () => ({ type: TIMER_RESET });
export const turnTimerOn = () => ({ type: TIMER_START });
export const stopTimer = () => ({ type: TIMER_STOP });
export const updateTimer = (time) => ({ type: TIMER_UPDATE, payload: time });
export const updateStep = (step) => ({ type: STEP_UPDATE, payload: step });

export const updateStepAndTimer = (step) => {
    return (dispatch, getState) => {
        dispatch(updateStep(step));

        const settings = getState().settings;

        if (step === STEP_WORK) {
            dispatch(updateTimer(settings.workDuration));
        } else if (step === STEP_BREAK_SHORT) {
            dispatch(updateTimer(settings.shortBreakDuration));
        } else {
            dispatch(updateTimer(settings.longBreakDuration));
        }
    };
};

export const startTimer = () => {
    return (dispatch) => {
        dispatch(turnTimerOn());
        dispatch(processTimer());
    };
};

// TODO
export const processTimer = () => {
    return (dispatch, getState) => {
        return sleepASecond()
            .then(() => {
                dispatch(tickTimer());

                const state = getState();

                if (state.timer.isRunning) {
                    updateTitle(state.timer.time);
                    dispatch(processTimer());
                } else {
                    updateTitle();
                }
            });
    };
};

export const tickTimer = () => {
    return (dispatch, getState) => {
        const timer = getState().timer;

        if (!timer.isRunning) return;

        dispatch(decreaseTimer());

        if (timer.time <= 0) {
            const currentStepIsWorking = timer.step === STEP_WORK;
            if (currentStepIsWorking) {
                dispatch(addTomatoro());
            }
            sendNotification(currentStepIsWorking);
            dispatch(resetTimer());
        }
    };
};

export default (state = initState(), action) => {
    switch (action.type) {
        case TIMER_DECREASE:
            return { ...state, time: state.time - 1 };
        case TIMER_RESET:
            return {
                ...state,
                time: initState(state).time,
                isRunning: false
            };
        case TIMER_START:
            return { ...state, isRunning: true };
        case TIMER_STOP: // TODO
            return { ...state, isRunning: false };
        case TIMER_UPDATE: // TODO
            return { ...state, time: action.payload };
        case STEP_UPDATE:
            return {
                ...state,
                time: initState(state).time,
                isRunning: false,
                step: action.payload
            };
        default:
            return state;
    }
};
