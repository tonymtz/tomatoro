import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, resetTimer, stopTimer, STEP_BREAK_SHORT, STEP_BREAK_LONG } from '../../reducers/timer';
import { secondsToTimeFormat } from '../../lib/format';
import './style.css';
import PlayButton from './PlayButton';
import RepeatButton from './RepeatButton';

class TomatoTimer extends Component {
    getProgressPercentage() {
        let totalTime;

        if (this.props.step === STEP_BREAK_LONG) {
            totalTime = this.props.settings.longBreakDuration;
        } else if (this.props.step === STEP_BREAK_SHORT) {
            totalTime = this.props.settings.shortBreakDuration;
        } else {
            totalTime = this.props.settings.workDuration;
        }

        let timeLeft = this.props.time;
        return (timeLeft * 100) / totalTime;
    };

    getPercentage(value) {
        let radius = 150;
        let circumference = Math.PI * (radius * 2);

        return (value / 100) * circumference;
    }

    getValue() {
        let value = this.getProgressPercentage();

        if (value < 0) {
            value = 0;
        }

        if (value > 100) {
            value = 100;
        }

        return value;
    }

    render() {
        let value = this.getValue();
        let pct = { 'strokeDashoffset': this.getPercentage(value) };

        return (
            <div className="tomato-timer text-center" data-pct="100">
                <svg className="svg" viewBox="0 0 310 310" version="1.1">
                    <circle r="150" cx="50%" cy="50%" fill="transparent"></circle>
                    <circle className="bar" style={ pct || 40 } r="150" cx="-50%" cy="50%" fill="transparent"></circle>
                </svg>

                <div className="timer">
                    { secondsToTimeFormat(this.props.time) }
                </div>

                <div className="control">
                    <PlayButton
                        onPause={ () => this.props.stopTimer() }
                        onStart={ () => this.props.startTimer() }
                        isRunning={ this.props.isRunning }
                    />

                    <RepeatButton
                        onClick={ () => this.props.resetTimer() }
                    />
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        time: state.timer.time,
        isRunning: state.timer.isRunning,
        step: state.timer.step,
        settings: state.settings
    }),
    { startTimer, resetTimer, stopTimer }
)(TomatoTimer);
