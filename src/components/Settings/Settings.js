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
                Settings...

                <RangeSlider
                    value={ this.props.settings.workDuration }
                    min={ 5 * 60 }
                    max={ 60 * 60 }
                    onChange={ this.props.updateWorkDuration }
                />

                { secondsToTimeFormat(this.props.settings.workDuration) }

                <RangeSlider
                    value={ this.props.settings.shortBreakDuration }
                    min={ 1 * 60 }
                    max={ 15 * 60 }
                    onChange={ this.props.updateShortBreakDuration }
                />

                { secondsToTimeFormat(this.props.settings.shortBreakDuration) }

                <RangeSlider
                    value={ this.props.settings.longBreakDuration }
                    onChange={ this.props.updateLongBreakDuration }
                />

                { secondsToTimeFormat(this.props.settings.longBreakDuration) }

                <button onClick={ this.props.resetAllSettings }>Reset</button>

            </div>
        )
    }
}

export default connect(
    (state) => ({
        settings: state.settings
    }),
    { updateWorkDuration, updateShortBreakDuration, updateLongBreakDuration, resetAllSettings }
)(Settings);