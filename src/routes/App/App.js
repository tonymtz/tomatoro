import "./App.css";
import {APP_TITLE} from "../../constants/AppConstants";

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

export default function (React, pomodoroStore, pomodoroActions, TomatoControl, TimerSelector) {

    function getPomodoroStore() {
        let pomodoroStoreSnapshot = pomodoroStore.get();

        let minutes = Math.floor(pomodoroStoreSnapshot.timeLeft / 1000 / 60);
        let seconds = Math.floor(pomodoroStoreSnapshot.timeLeft / 1000 % 60);

        return {
            minutes: minutes,
            seconds: seconds,
            pomodoros: pomodoroStoreSnapshot.pomodoros,
            isRunning: pomodoroStoreSnapshot.isRunning,
            hasFinished: pomodoroStoreSnapshot.hasFinished,
            currentStep: pomodoroStoreSnapshot.currentStep,
            timeLeft: pomodoroStoreSnapshot.timeLeft,
            totalTime: pomodoroStoreSnapshot.totalTime
        };
    }

    class App extends React.Component {

        state = getPomodoroStore();

        componentDidMount() {
            pomodoroStore.addChangeListener(this.onChange);
            document.title = APP_TITLE;
        }

        componentWillUnmount() {
            pomodoroStore.removeChangeListener(this.onChange);
        }

        onChange = () => {
            this.setState(getPomodoroStore());

            if (this.state.isRunning) {
                document.title = `(${formatTime(this.state.minutes)}:${formatTime(this.state.seconds)}) - ${APP_TITLE}`;
            } else {
                document.title = APP_TITLE;
            }
        };

        getProgressPercentage = () => {
            let totalTime = this.state.totalTime;
            let timeLeft = this.state.timeLeft;
            return (timeLeft * 100) / totalTime;
        };

        onStartTimer = () => {
            pomodoroActions.startTimer();
        };

        onPauseTimer = () => {
            pomodoroActions.stopTimer();
        };

        onResetTimer = () => {
            pomodoroActions.reset();
        };

        onPomodoroStepClick = () => {
            pomodoroActions.changeToPomodoro();
        };

        onShortBreakStepClick = () => {
            pomodoroActions.changeToShortBreak();
        };

        onLongBreakStepClick = () => {
            pomodoroActions.changeToLongBreak();
        };

        render() {
            return (
                <div className="app">

                    <div className="container">

                        <div className="col-60">
                            <TomatoControl
                                minutes={this.state.minutes}
                                seconds={this.state.seconds}
                                percentage={this.getProgressPercentage()}
                                hasFinished={this.state.hasFinished}
                                isRunning={this.state.isRunning}
                                onPause={this.onPauseTimer}
                                onStart={this.onStartTimer}
                                onReset={this.onResetTimer}
                            />
                        </div>

                        <div className="col-40">
                            <h1>Take your time. Get things done.</h1>

                            <h2>My Tomatoros: <span className="highlight">{this.state.pomodoros}</span></h2>

                            <TimerSelector
                                currentStep={this.state.currentStep}
                                onLongBreak={this.onLongBreakStepClick}
                                onPomodoro={this.onPomodoroStepClick}
                                onShortBreak={this.onShortBreakStepClick}
                            />
                        </div>

                    </div>

                </div>
            );
        }
    }

    return App;
}
