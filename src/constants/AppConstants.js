export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = 'Tomatoro';
export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
export const ITEMS_GET_ERROR = 'ITEMS_GET_ERROR';
export const ITEMS_UPDATED = 'ITEMS_UPDATED';

// EVENTS
export const TIMER_UPDATED = 'TIMER_UPDATED';
export const TIMER_TICK = 'TIMER_TICK';
export const TIMER_RESTART = 'TIMER_RESTART';
export const TIMER_RESET = 'TIMER_RESET';
export const TIMER_ENDED = 'TIMER_ENDED';
export const POMODORO_UPDATED = 'POMODORO_UPDATED';
export const POMODORO_ADD = 'POMODORO_ADD';

export const POMODORO_NEW_STEP_ACTION = 'POMODORO_NEW_STEP_ACTION';
export const SETTINGS_MODAL_TOGGLE = 'SETTINGS_MODAL_TOGGLE';

// OTHER
export const SECOND = 1000;
export const MINUTE = SECOND * 60;

// DURATION

let pomodoroDuration;
let shortBreakDuration;
let longBreakDuration;

if (DEBUG) {
    pomodoroDuration = MINUTE * .10;
    shortBreakDuration = MINUTE * .05;
    longBreakDuration = MINUTE * .05;
} else {
    pomodoroDuration = MINUTE * 25;
    shortBreakDuration = MINUTE * 5;
    longBreakDuration = MINUTE * 15;
}

export const POMODORO_DURATION = pomodoroDuration;
export const BREAK_SHORT_DURATION = shortBreakDuration;
export const BREAK_LONG_DURATION = longBreakDuration;

// END DURATION

export const MAX_POMODORO_COUNT = 4;

// TIMER ACTIONS
export const TIMER_START = 'TIMER_START';
export const TIMER_STOP = 'TIMER_STOP';
export const POMODORO_STEP_NEXT = 'STEP_NEXT';
export const POMODORO_CHANGE_DURATION = 'POMODORO_CHANGE_DURATION';
export const SHORT_BREAK_CHANGE_DURATION = 'SHORT_BREAK_CHANGE_DURATION';
export const LONG_BREAK_CHANGE_DURATION = 'LONG_BREAK_CHANGE_DURATION';

// STEPS
export const STEP_POMODORO = 1;
export const STEP_SHORT_BREAK = 2;
export const STEP_LONG_BREAK = 3;

export const POMODORO_STEPS = [
    STEP_POMODORO,
    STEP_SHORT_BREAK,
    STEP_POMODORO,
    STEP_SHORT_BREAK,
    STEP_POMODORO,
    STEP_SHORT_BREAK,
    STEP_POMODORO,
    STEP_LONG_BREAK
];

export const POMODORO_COMPLETED_TITLE = 'Take a Break!';
export const POMODORO_COMPLETED_BODY = 'Pomodoro completed';
export const POMODORO_COMPLETED_ICON = 'http://i.imgur.com/nkhPpdK.png';
