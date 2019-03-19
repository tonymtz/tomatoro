import React from 'react';
import PropTypes from 'prop-types';

const StepSelector = ({ userPrefs, currentStep, updateCurrentStep, isUpdatePermitted }) => {
    return (
        <div>
            <h3>Set the time and hit play:</h3>

            <button
                disabled={ currentStep === 'workLength' }
                onClick={ () => onUpdateCurrentStep('workLength') }>
                One Tomatoro - { userPrefs.workLength / 60 } min
            </button>
            <button
                disabled={ currentStep === 'shortBreakLength' }
                onClick={ () => onUpdateCurrentStep('shortBreakLength') }>
                Short Break - { userPrefs.shortBreakLength / 60 } min
            </button>
            <button
                disabled={ currentStep === 'longBreakLength' }
                onClick={ () => onUpdateCurrentStep('longBreakLength') }>
                Long Break - { userPrefs.longBreakLength / 60 } min
            </button>
        </div>
    );

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
