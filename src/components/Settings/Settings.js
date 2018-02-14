import React, { Component } from 'react';
import { connect } from 'react-redux';
import RangeSlider from './RangeSlider';
import {
    updateWorkDuration,
    updateShortBreakDuration,
    updateLongBreakDuration,
    resetAllSettings
} from '../../reducers/settings';
import { secondsToTimeFormat } from '../../lib/format';

class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <div className="container">
                    <div className="col-100">
                        <label htmlFor="pomodoroDuration">Pomodoro Duration</label>
                        <RangeSlider
                            value={ this.props.settings.workDuration }
                            min={ 5 * 60 }
                            max={ 60 * 60 }
                            onChange={ this.props.updateWorkDuration }
                            showValueLabel={ true }
                            formattedValue={ secondsToTimeFormat(this.props.settings.workDuration) }
                        />
                    </div>

                    <div className="col-100">
                        <label htmlFor="breakShortDuration">Short Break Duration</label>
                        <RangeSlider
                            value={ this.props.settings.shortBreakDuration }
                            min={ 1 * 60 }
                            max={ 15 * 60 }
                            onChange={ this.props.updateShortBreakDuration }
                            showValueLabel={ true }
                            formattedValue={ secondsToTimeFormat(this.props.settings.shortBreakDuration) }
                        />
                    </div>

                    <div className="col-100">
                        <label htmlFor="breakLongDuration">Long Break Duration</label>
                        <RangeSlider
                            value={ this.props.settings.longBreakDuration }
                            onChange={ this.props.updateLongBreakDuration }
                            showValueLabel={ true }
                            formattedValue={ secondsToTimeFormat(this.props.settings.longBreakDuration) }
                        />
                    </div>

                    <div className="col-100">
                        <button onClick={ this.props.resetAllSettings }>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        settings: state.settings
    }),
    { updateWorkDuration, updateShortBreakDuration, updateLongBreakDuration, resetAllSettings }
)(Settings);
