import React, { Component } from 'react';
import { withAppContext } from 'withAppContext';
import RangeSlider from 'components/RangeSlider';
import { secondsToTimeFormat } from 'lib/format';
import PropTypes from 'prop-types';

class Settings extends Component {
    static propTypes = {
        appState: PropTypes.object.isRequired,
        userPrefs: PropTypes.object.isRequired,
        updateUserPrefs: PropTypes.func.isRequired
    };

    state = {
        isDirty: false,
        workLength: this.props.userPrefs.workLength,
        shortBreakLength: this.props.userPrefs.shortBreakLength,
        longBreakLength: this.props.userPrefs.longBreakLength
    };

    saveState = () => {
        const { workLength, shortBreakLength, longBreakLength } = this.state;
        this.props.updateUserPrefs({ workLength, shortBreakLength, longBreakLength });
        this.setState({ isDirty: false });
    };

    updateKey = (key, value) => {
        this.setState({
            [ key ]: +value,
            isDirty: true
        })
    };

    render() {
        return (
            <div>
                <h1>Settings</h1>

                <div>
                    <label htmlFor="pomodoroDuration">Pomodoro Duration</label>
                    <RangeSlider
                        name="pomodoroDuration"
                        value={ this.state.workLength }
                        min={ 5 * 60 }
                        max={ 45 * 60 }
                        onChange={ (value) => this.updateKey('workLength', value) }
                        showValueLabel={ true }
                        formatValue={ secondsToTimeFormat }
                    />
                </div>

                <div>
                    <label htmlFor="shortBreakDuration">Short Break Duration</label>
                    <RangeSlider
                        name="shortBreakDuration"
                        value={ this.state.shortBreakLength }
                        min={ 2 * 60 / 2 }
                        max={ 10 * 60 }
                        onChange={ (value) => this.updateKey('shortBreakLength', value) }
                        showValueLabel={ true }
                        formatValue={ secondsToTimeFormat }
                    />
                </div>

                <div>
                    <label htmlFor="longBreakDuration">Long Break Duration</label>
                    <RangeSlider
                        name="longBreakDuration"
                        value={ this.state.longBreakLength }
                        min={ 5 * 60 }
                        max={ 25 * 60 }
                        onChange={ (value) => this.updateKey('longBreakLength', value) }
                        showValueLabel={ true }
                        formatValue={ secondsToTimeFormat }
                    />
                </div>

                <button
                    disabled={ !this.state.isDirty }
                    onClick={ this.saveState }>
                    Save Changes
                </button>
            </div>
        );
    }
}

export default withAppContext(Settings);
