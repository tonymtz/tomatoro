import gaActions from '../actions/GAActions';
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
    BREAK_LONG_DURATION,
    BREAK_SHORT_DURATION,
    POMODORO_DURATION,
    POMODORO_NEW_STEP_ACTION,
    POMODORO_UPDATED,
    SECOND,
    STEP_POMODORO,
    STEP_SHORT_BREAK,
    TIMER_RESET,
    TIMER_START,
    TIMER_STOP,
    TIMER_TICK,
    POMODORO_CHANGE_DURATION,
    SHORT_BREAK_CHANGE_DURATION,
    LONG_BREAK_CHANGE_DURATION
} from '../constants/AppConstants';

class PomodoroStore extends EventEmitter {
    constructor(localStorageImpl, ...args) {
        super(...args);
        // dependencies
        this.localStorage = localStorageImpl;

        // settings
        this._loadFromStorage();

        // app state
        this.currentStep = STEP_POMODORO;
        this.timeLeft = this.pomodoroDuration;
        this.totalTime = this.pomodoroDuration;
        this.hasFinished = false;
        this.isRunning = false;
        this.pomodoros = 0;
    }

    reset() {
        this.hasFinished = false;
        this.isRunning = false;

        if (this.currentStep === STEP_POMODORO) {
            this.timeLeft = this.totalTime;
        } else if (this.currentStep === STEP_SHORT_BREAK) {
            this.timeLeft = this.breakShortDuration;
        } else {
            this.timeLeft = this.breakLongDuration;
        }

        this.emitChange();
    }

    get () {
        return {
            timeLeft: this.timeLeft,
            totalTime: this.totalTime,
            pomodoros: this.pomodoros,
            isRunning: this.isRunning,
            hasFinished: this.hasFinished,
            currentStep: this.currentStep,
            pomodoroDuration: this.pomodoroDuration,
            breakShortDuration: this.breakShortDuration,
            breakLongDuration: this.breakLongDuration
        };
    }

    tick() {
        if (this.hasFinished) {
            return;
        }

        this.timeLeft -= SECOND;

        if (this.timeLeft <= 0) {
            this.hasFinished = true;
            this.isRunning = false;

            if (this.currentStep === STEP_POMODORO) {
                this.pomodoros += 1;
                gaActions.workCycleComplete();
            } else if (this.currentStep === STEP_SHORT_BREAK) {
                gaActions.shortBreakCycleComplete();
            } else {
                gaActions.longBreakCycleComplete();
            }
        }

        this.emitChange();
    }

    start() {
        if (this.hasFinished) {
            return;
        }
        this.isRunning = true;
        this.hasFinished = false;
        this.emitChange();
    }

    stop() {
        this.isRunning = false;
        this.emitChange();
    }

    changeStep(step) {
        this.isRunning = false;
        this.hasFinished = false;
        this.currentStep = step;

        this._updateTimers();

        this.emitChange();
    }

    updatePomodoroDuration(newValue) {
        this.pomodoroDuration = newValue;
        if (!this.isRunning) {
            this._updateTimers();
        }
        this._saveToStorage();
        this.emitChange();
    }

    updateShortBreakDuration(newValue) {
        this.breakShortDuration = newValue;
        if (!this.isRunning) {
            this._updateTimers();
        }
        this._saveToStorage();
        this.emitChange();
    }

    updateLongBreakDuration(newValue) {
        this.breakLongDuration = newValue;
        if (!this.isRunning) {
            this._updateTimers();
        }
        this._saveToStorage();
        this.emitChange();
    }

    emitChange() {
        this.emit(POMODORO_UPDATED);
    }

    addChangeListener(callback) {
        this.on(POMODORO_UPDATED, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(POMODORO_UPDATED, callback);
    }

    _updateTimers() {
        if (this.currentStep === STEP_POMODORO) {
            this.totalTime = this.pomodoroDuration;
            this.timeLeft = this.pomodoroDuration;
        } else if (this.currentStep === STEP_SHORT_BREAK) {
            this.totalTime = this.breakShortDuration;
            this.timeLeft = this.breakShortDuration;
        } else {
            this.totalTime = this.breakLongDuration;
            this.timeLeft = this.breakLongDuration;
        }
    }

    _saveToStorage() {
        let newState = {
            pomodoroDuration: this.pomodoroDuration,
            breakShortDuration: this.breakShortDuration,
            breakLongDuration: this.breakLongDuration,
        };
        this.localStorage.setItem('settings', JSON.stringify(newState));
    }

    _loadFromStorage() {
        let settings = this.localStorage.getItem('settings');
        if (settings) {
            settings = JSON.parse(settings);
            this.pomodoroDuration = settings.pomodoroDuration || POMODORO_DURATION;
            this.breakShortDuration = settings.breakShortDuration || BREAK_SHORT_DURATION;
            this.breakLongDuration = settings.breakLongDuration || BREAK_LONG_DURATION;
        } else {
            this.pomodoroDuration = POMODORO_DURATION;
            this.breakShortDuration = BREAK_SHORT_DURATION;
            this.breakLongDuration = BREAK_LONG_DURATION;
        }
    }
}

export default function (localStorageImpl) {
    let store = new PomodoroStore(localStorageImpl);

    AppDispatcher.register((action) => {
        switch (action.actionType) {
            case TIMER_TICK:
                store.tick();
                break;

            case TIMER_RESET:
                store.reset();
                break;

            case TIMER_START:
                store.start();
                break;

            case TIMER_STOP:
                store.stop();
                break;

            case POMODORO_NEW_STEP_ACTION:
                store.changeStep(action.step);
                break;

            case POMODORO_CHANGE_DURATION:
                store.updatePomodoroDuration(action.data);
                break;

            case SHORT_BREAK_CHANGE_DURATION:
                store.updateShortBreakDuration(action.data);
                break;

            case LONG_BREAK_CHANGE_DURATION:
                store.updateLongBreakDuration(action.data);
                break;

            default:
        }
    });

    return store;
}
