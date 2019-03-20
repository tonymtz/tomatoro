import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { emptyFn } from 'contants';
import TomatoTimerController from './TomatoTimerController';
import { secondsToTimeFormat } from 'lib/format';

import PlayButton from './PlayButton';
import RepeatButton from './RepeatButton';
import PauseButton from './PauseButton';

import './TomatoTimer.scss';

export default class TomatoTimer extends PureComponent {
    static propTypes = {
        seconds: PropTypes.number.isRequired,
        onStop: PropTypes.func,
        onStart: PropTypes.func,
        onTick: PropTypes.func,
        onComplete: PropTypes.func
    };

    static defaultProps = {
        onTick: emptyFn,
        onComplete: emptyFn
    };

    controller = TomatoTimerController(this);

    state = {
        count: this.props.seconds,
        isStopped: true,
        isRunning: false
    };

    componentWillUnmount() {
        this.controller.pause();
    }

    getProgressPercentage = () => {
        let timeLeft = this.state.count;
        return (timeLeft * 100) / this.props.seconds;
    };

    getValue = () => {
        let value = this.getProgressPercentage();

        if (value < 0) {
            value = 0;
        }

        if (value > 100) {
            value = 100;
        }

        return value;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.isStopped || prevProps.seconds !== this.props.seconds) {
            this.setState({ count: this.props.seconds });
        }
    }

    render() {
        const { count, isRunning } = this.state;
        const value = this.getValue();
        const pct = { 'strokeDashoffset': getPercentage(value) };

        return (
            <div className="tomato-timer">
                <div className="widget-wrapper">
                    <svg className="svg" viewBox="0 0 310 310">
                        <circle r="120" cx="50%" cy="58%" fill="transparent"/>
                        <circle className="bar" style={ pct || 40 } r="120" cx="-58%" cy="50%" fill="transparent"/>
                    </svg>
                    <span className="timer">{ secondsToTimeFormat(count) }</span>

                    <div className="control">
                        { isRunning ?
                            <PauseButton onClick={ this.controller.pause }/> :
                            <PlayButton onClick={ this.controller.start }/> }

                        <RepeatButton onClick={ this.controller.reset }/>
                    </div>
                </div>
            </div>
        );
    }
}

function getPercentage(value) {
    const radius = 150;
    const circumference = Math.PI * (radius * 2);

    return (value / 100) * circumference;
}
