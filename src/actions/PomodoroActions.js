import AppDispatcher from '../dispatcher/AppDispatcher';
import {
    POMODORO_NEW_STEP_ACTION,
    SECOND,
    STEP_LONG_BREAK,
    STEP_POMODORO,
    STEP_SHORT_BREAK,
    TIMER_RESET,
    TIMER_START,
    TIMER_STOP,
    TIMER_TICK,
    POMODORO_CHANGE_DURATION,
    SETTINGS_MODAL_TOGGLE,
    SHORT_BREAK_CHANGE_DURATION,
    LONG_BREAK_CHANGE_DURATION
} from '../constants/AppConstants';

function tick() {
    AppDispatcher.dispatch({
        actionType: TIMER_TICK
    });
}

export default {

    changeToPomodoro() {
        this._clearInterval();
        AppDispatcher.dispatch({
            actionType: POMODORO_NEW_STEP_ACTION,
            step: STEP_POMODORO
        });
    },

    changeToShortBreak() {
        this._clearInterval();
        AppDispatcher.dispatch({
            actionType: POMODORO_NEW_STEP_ACTION,
            step: STEP_SHORT_BREAK
        });
    },

    changeToLongBreak() {
        this._clearInterval();
        AppDispatcher.dispatch({
            actionType: POMODORO_NEW_STEP_ACTION,
            step: STEP_LONG_BREAK
        });
    },

    toggleSettingsModal() {
        AppDispatcher.dispatch({
            actionType: SETTINGS_MODAL_TOGGLE
        });
    },

    startTimer() {
        this._clearInterval();
        this.timer = setInterval(tick, SECOND);
        AppDispatcher.dispatch({actionType: TIMER_START});
    },

    stopTimer() {
        this._clearInterval();
        AppDispatcher.dispatch({actionType: TIMER_STOP});
    },

    reset() {
        this._clearInterval();
        AppDispatcher.dispatch({actionType: TIMER_RESET});
    },

    updatePomodoroDuration(newPomodoroDuration) {
        AppDispatcher.dispatch({
            actionType: POMODORO_CHANGE_DURATION,
            data: newPomodoroDuration
        });
    },

    updateShortBreakDuration(newShortBreakDuration) {
        AppDispatcher.dispatch({
            actionType: SHORT_BREAK_CHANGE_DURATION,
            data: newShortBreakDuration
        });
    },

    updateLongBreakDuration(newLongBreakDuration) {
        AppDispatcher.dispatch({
            actionType: LONG_BREAK_CHANGE_DURATION,
            data: newLongBreakDuration
        });
    },

    _clearInterval() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

};
