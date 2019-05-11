import React from 'react';
import PropTypes from 'prop-types';

import TomatoIcon from '../TomatoIcon';

import './StepSelector.scss';

const buttons = [
    { key: 'workLength', label: 'One Tomatoro' },
    { key: 'shortBreakLength', label: 'Short Break' },
    { key: 'longBreakLength', label: 'Long Break' }
];

const StepSelector = ({ userPrefs, currentStep, updateCurrentStep, isUpdatePermitted }) => {
    return (
        <div className="step-selector">
            <h3>Set the time and hit play:</h3>
            { buttons.map(({ key, label }) => renderButton(key, label)) }
        </div>
    );

    function renderButton(key, label) {
        return (
            <button
                key={ key }
                disabled={ currentStep === key }
                onClick={ () => onUpdateCurrentStep(key) }>
                <TomatoIcon/>
                { label } - { userPrefs[ key ] / 60 } min
            </button>
        );
    }

    function onUpdateCurrentStep(step) {
        if (isUpdatePermitted) {
            updateCurrentStep(step);
        }
    }
};

StepSelector.propTypes = {
    currentStep: PropTypes.string.isRequired,
    userPrefs: PropTypes.object.isRequired,
    updateCurrentStep: PropTypes.func.isRequired,
    isUpdatePermitted: PropTypes.bool.isRequired
};

export default StepSelector;
