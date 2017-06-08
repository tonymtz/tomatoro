import "./TimerSelector.css";
import {STEP_LONG_BREAK, STEP_POMODORO, STEP_SHORT_BREAK} from "../../constants/AppConstants";

export default function (React, PropTypes) {

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
        <div className='small-12 medium-6 float-center'>
          <div className='expanded button-group'>
            <button className='button'
                    disabled={this.props.currentStep === STEP_POMODORO}
                    onClick={this.props.onPomodoro}>
              <span className="typcn typcn-flash"></span>
              Pomodoro
            </button>
            <button className='button'
                    disabled={this.props.currentStep === STEP_SHORT_BREAK}
                    onClick={this.props.onShortBreak}>
              <span className="typcn typcn-plug"></span>
              Short Break
            </button>
            <button className='button'
                    disabled={this.props.currentStep === STEP_LONG_BREAK}
                    onClick={this.props.onLongBreak}>
              <span className="typcn typcn-coffee"></span>
              Long Break
            </button>
          </div>
        </div>
      );
    }

  }

  return TimerSelector;

}
