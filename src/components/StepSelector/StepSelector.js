import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../reducers/settings';
import { updateStepAndTimer } from '../../reducers/timer';
import { STEP_WORK, STEP_BREAK_LONG, STEP_BREAK_SHORT } from '../../reducers/timer';
import './style.css';
import TomatoIcon from './TomatoIcon';
import Modal from '../Modal/Modal';
import Settings from '../Settings';

// TODO - Extract modal to another container...

class StepSelector extends Component {
    render() {
        return (
            <div className="step-selector">
                <h3>Set the time and hit play:</h3>

                <button
                    disabled={ this.props.step === STEP_WORK }
                    onClick={ () => this.props.updateStepAndTimer(STEP_WORK) }>
                    <TomatoIcon/> One Tomatoro - { this.props.workDuration / 60 } min
                </button>

                <button
                    disabled={ this.props.step === STEP_BREAK_SHORT }
                    onClick={ () => this.props.updateStepAndTimer(STEP_BREAK_SHORT) }>
                    <TomatoIcon/> Short Break - { this.props.shortBreakDuration / 60 } min
                </button>

                <button
                    disabled={ this.props.step === STEP_BREAK_LONG }
                    onClick={ () => this.props.updateStepAndTimer(STEP_BREAK_LONG) }>
                    <TomatoIcon/> Long Break - { this.props.longBreakDuration / 60 } min
                </button>

                <button onClick={ () => this.props.toggleModal() }>
                    <img src="svg/icon-settings-inactive.svg"
                         alt="icon-settings-inactive"/> Settings
                </button>

                <Modal isModalOpen={ this.props.isModalOpen } onClick={ () => this.props.toggleModal() }>
                    <Settings/>
                </Modal>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        step: state.timer.step,
        workDuration: state.settings.workDuration,
        shortBreakDuration: state.settings.shortBreakDuration,
        longBreakDuration: state.settings.longBreakDuration,
        isModalOpen: state.settings.isModalOpen
    }),
    { updateStepAndTimer, toggleModal }
)(StepSelector);
