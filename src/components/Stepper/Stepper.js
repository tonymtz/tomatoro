import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TiMediaRecord, TiMediaRecordOutline } from 'react-icons/lib/ti';

export default class Stepper extends Component {
    static propTypes = {};

    state = {
        steps: this.props.steps,
        currentStep: 0
    };

    onGoBack = () => {
        this.setState({ currentStep: this.state.currentStep - 1 });
    };

    onGoNext = () => {
        this.setState({ currentStep: this.state.currentStep + 1 });
    };

    onGoStep = step => {
        this.setState({ currentStep: step });
    };

    render() {
        return (
            <div className="stepper">
                <div className="body">
                    { this.props.steps[ this.state.currentStep ] }
                </div>
                <div className="controls">
                    { this.state.currentStep !== 0 &&
                    <button onClick={ this.onGoBack }>Back</button> }

                    { this.props.steps.map((step, index) => (
                        <button
                            key={ index }
                            onClick={ () => this.onGoStep(index) }>
                            { this.state.currentStep === index ?
                                <TiMediaRecord/> :
                                <TiMediaRecordOutline/> }
                        </button>
                    )) }

                    { this.state.currentStep !== this.props.steps.length - 1 &&
                    <button onClick={ this.onGoNext }>Next</button> }

                    { this.state.currentStep === this.props.steps.length - 1 &&
                    <Link to='/'>Done</Link> }
                </div>
            </div>
        );
    }
};
