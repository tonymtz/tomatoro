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
            onLongBreak: PropTypes.func.isRequired
        };

        render() {
            return (
                <div className="timer-selector">
                    <h3>Set the time and hit play:</h3>

                    <button
                        disabled={this.props.currentStep === STEP_POMODORO}
                        onClick={this.props.onPomodoro}>
                        <TomatoIcon/> One Tomatoro - 25 min
                    </button>

                    <button
                        disabled={this.props.currentStep === STEP_SHORT_BREAK}
                        onClick={this.props.onShortBreak}>
                        <TomatoIcon/> Short Break - 5 min
                    </button>

                    <button
                        disabled={this.props.currentStep === STEP_LONG_BREAK}
                        onClick={this.props.onLongBreak}>
                        <TomatoIcon/> Long Break - 15 min
                    </button>
                </div>
            );
        }

    }

    return TimerSelector;

}
