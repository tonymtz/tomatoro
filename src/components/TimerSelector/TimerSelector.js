import "./TimerSelector.css";
import {STEP_LONG_BREAK, STEP_POMODORO, STEP_SHORT_BREAK} from "../../constants/AppConstants";

export default function (React, PropTypes, TomatoIcon) {

    class TimerSelector extends React.Component {

        static defaultProps = {
            currentStep: STEP_POMODORO
        };

        static propTypes = {
            currentStep: PropTypes.number.isRequired,
            onPomodoro: PropTypes.func.isRequired,
            onShortBreak: PropTypes.func.isRequired,
            onLongBreak: PropTypes.func.isRequired,
            onSettingsTrigger: PropTypes.func.isRequired,
            pomodoroDuration: PropTypes.number.isRequired,
            breakShortDuration: PropTypes.number.isRequired,
            breakLongDuration: PropTypes.number.isRequired
        };

        render() {
            return (
                <div className="timer-selector">
                    <h3>Set the time and hit play:</h3>

                    <button
                        disabled={this.props.currentStep === STEP_POMODORO}
                        onClick={this.props.onPomodoro}>
                        <TomatoIcon/> One Tomatoro - {this.props.pomodoroDuration} min
                    </button>

                    <button
                        disabled={this.props.currentStep === STEP_SHORT_BREAK}
                        onClick={this.props.onShortBreak}>
                        <TomatoIcon/> Short Break - {this.props.breakShortDuration} min
                    </button>

                    <button
                        disabled={this.props.currentStep === STEP_LONG_BREAK}
                        onClick={this.props.onLongBreak}>
                        <TomatoIcon/> Long Break - {this.props.breakLongDuration} min
                    </button>

                    <button onClick={this.props.onSettingsTrigger}>
                        <img src="svg/icon-settings-inactive.svg"
                             alt="icon-settings-inactive"/> Settings
                    </button>
                </div>
            );
        }

    }

    return TimerSelector;

}
