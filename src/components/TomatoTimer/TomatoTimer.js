import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, resetTimer, stopTimer } from '../../reducers/timer';
import { secondsToTimeFormat } from '../../lib/format';

class TomatoTimer extends Component {
    render() {
        return (
            <div className="tomato-timer">
                { secondsToTimeFormat(this.props.time) }

                <hr/>

                <button onClick={ () => this.props.startTimer() } disabled={ this.props.isRunning }>start</button>
                <button onClick={ () => this.props.stopTimer() } disabled={ !this.props.isRunning }>stop</button>
                <button onClick={ () => this.props.resetTimer() }>reset</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        time: state.timer.time,
        isRunning: state.timer.isRunning
    }),
    { startTimer, resetTimer, stopTimer }
)(TomatoTimer);
