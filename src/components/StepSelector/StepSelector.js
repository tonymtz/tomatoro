import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStepAndTimer } from '../../reducers/timer';
import { STEP_WORK, STEP_BREAK_LONG, STEP_BREAK_SHORT } from '../../reducers/timer';

class StepSelector extends Component {
    render() {
        return (
            <div className="step-selector">
                <button
                    disabled={ this.props.step === STEP_WORK }
                    onClick={ () => this.props.updateStepAndTimer(STEP_WORK) }>
                    work
                </button>

                <button
                    disabled={ this.props.step === STEP_BREAK_SHORT }
                    onClick={ () => this.props.updateStepAndTimer(STEP_BREAK_SHORT) }>
                    short break
                </button>

                <button
                    disabled={ this.props.step === STEP_BREAK_LONG }
                    onClick={ () => this.props.updateStepAndTimer(STEP_BREAK_LONG) }>
                    long break
                </button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        step: state.timer.step
    }),
    { updateStepAndTimer }
)(StepSelector);
