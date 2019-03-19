import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';

import TomatoTimer from 'components/TomatoTimer';
import StepSelector from 'components/StepSelector/StepSelector';
import { updateTitle } from 'lib/title';
import { sendNotification } from 'lib/notifications';

import { withAppContext } from 'withAppContext';

class Home extends Component {
    static propTypes = {
        appState: PropTypes.object.isRequired,
        userPrefs: PropTypes.object.isRequired,
        updateCurrentStep: PropTypes.func.isRequired
    };

    state = {
        isBlocking: false,
    };

    onStart = () => {
        this.setState({ isBlocking: true });
    };

    onStop = () => {
        this.setState({ isBlocking: false });
        updateTitle();
    };

    onComplete = () => {
        this.setState({ isBlocking: false });
        updateTitle();
        sendNotification(true);
    };

    onTick = ({ count }) => {
        updateTitle(count);
    };

    render() {
        const totalSecondsForCurrentStep = this.props.userPrefs[ this.props.appState.currentStep ];

        return (
            <Fragment>
                <TomatoTimer
                    seconds={ totalSecondsForCurrentStep }
                    onStop={ this.onStop }
                    onStart={ this.onStart }
                    onComplete={ this.onComplete }
                    onTick={ this.onTick }
                />

                <StepSelector
                    currentStep={ this.props.appState.currentStep }
                    userPrefs={ this.props.userPrefs }
                    updateCurrentStep={ this.props.updateCurrentStep }
                    isUpdatePermitted={ !this.state.isBlocking }
                />

                <Prompt
                    when={ this.state.isBlocking }
                    message="Are you sure? you will interrupt your current session."
                />
            </Fragment>
        );
    }
}

export default withAppContext(Home);
