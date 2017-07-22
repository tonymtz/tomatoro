import AppDispatcher from '../dispatcher/AppDispatcher';
import {
    POMODORO_CHANGE_DURATION,
    SHORT_BREAK_CHANGE_DURATION,
    LONG_BREAK_CHANGE_DURATION
} from '../constants/AppConstants';

export default {

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
    }

};
