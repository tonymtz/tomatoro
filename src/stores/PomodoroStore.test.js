import PomodoroStoreFactory from './PomodoroStore';
import {
    BREAK_LONG_DURATION,
    BREAK_SHORT_DURATION,
    POMODORO_DURATION,
    POMODORO_NEW_STEP_ACTION,
    POMODORO_UPDATED,
    SECOND,
    STEP_POMODORO,
    STEP_SHORT_BREAK,
    STEP_LONG_BREAK,
    TIMER_RESET,
    TIMER_START,
    TIMER_STOP,
    TIMER_TICK,
    POMODORO_CHANGE_DURATION,
    SHORT_BREAK_CHANGE_DURATION,
    LONG_BREAK_CHANGE_DURATION
} from '../constants/AppConstants';

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

describe('PomodoroStore', () => {

    let pomodoroStore;

    beforeEach(() => {
        pomodoroStore = PomodoroStoreFactory(localStorageMock);
    });

    describe('#constructor', () => {
        it('should return a pomodoroStore initialized', () => {
            expect(pomodoroStore).toBeDefined();
            expect(pomodoroStore.localStorage).toEqual(localStorageMock);
            expect(pomodoroStore.currentStep).toEqual(STEP_POMODORO);
            expect(pomodoroStore.timeLeft).toEqual(POMODORO_DURATION);
            expect(pomodoroStore.totalTime).toEqual(POMODORO_DURATION);
            expect(pomodoroStore.hasFinished).toEqual(false);
            expect(pomodoroStore.isRunning).toEqual(false);
            expect(pomodoroStore.pomodoros).toEqual(0);
        });
    });

    describe('#reset', () => {
        it('should reset pomodoroStore correctly, case STEP_POMODORO', (done) => {
            pomodoroStore.addChangeListener(() => {
                expect(pomodoroStore.hasFinished).toEqual(false);
                expect(pomodoroStore.isRunning).toEqual(false);
                expect(pomodoroStore.timeLeft).toEqual(POMODORO_DURATION);

                done();
            });

            pomodoroStore.currentStep = STEP_POMODORO;
            pomodoroStore.reset();
        });

        it('should reset pomodoroStore correctly, case STEP_SHORT_BREAK', (done) => {
            pomodoroStore.addChangeListener(() => {
                expect(pomodoroStore.hasFinished).toEqual(false);
                expect(pomodoroStore.isRunning).toEqual(false);
                expect(pomodoroStore.timeLeft).toEqual(BREAK_SHORT_DURATION);

                done();
            });

            pomodoroStore.currentStep = STEP_SHORT_BREAK;
            pomodoroStore.reset();
        });

        it('should reset pomodoroStore correctly, case STEP_LONG_BREAK', (done) => {
            pomodoroStore.addChangeListener(() => {
                expect(pomodoroStore.hasFinished).toEqual(false);
                expect(pomodoroStore.isRunning).toEqual(false);
                expect(pomodoroStore.timeLeft).toEqual(BREAK_LONG_DURATION);

                done();
            });

            pomodoroStore.currentStep = STEP_LONG_BREAK;
            pomodoroStore.reset();
        });
    });

    xdescribe('#get', () => {
        // TODO - complete this
    });

    xdescribe('#tick', () => {
        // TODO - complete this
    });

    xdescribe('#start', () => {
        // TODO - complete this
    });

    xdescribe('#stop', () => {
        // TODO - complete this
    });

    xdescribe('#changeStep', () => {
        // TODO - complete this
    });

    xdescribe('#updatePomodoroDuration', () => {
        // TODO - complete this
    });

    xdescribe('#updateShortBreakDuration', () => {
        // TODO - complete this
    });

    xdescribe('#updateLongBreakDuration', () => {
        // TODO - complete this
    });

    xdescribe('#addChangeListener', () => {
        // TODO - complete this
    });

    xdescribe('#removeChangeListener', () => {
        // TODO - complete this
    });

    xdescribe('#_updateTimers', () => {
        // TODO - complete this
    });

    xdescribe('#_saveToStorage', () => {
        // TODO - complete this
    });

    xdescribe('#_loadFromStorage', () => {
        // TODO - complete this
    });

    xdescribe('#changeStep', () => {
        // TODO - complete this
    });

    xdescribe('#changeStep', () => {
        // TODO - complete this
    });

});
