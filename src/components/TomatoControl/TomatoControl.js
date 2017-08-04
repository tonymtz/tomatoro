import './TomatoControl.css';

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

export default function (React, PropTypes, PlayButton, RepeatButton) {
    class TomatoControl extends React.Component {

        static defaultProps = {
            percentage: 0,
            minutes: 0,
            seconds: 0,
            isRunning: false,
            hasFinished: false
        };

        static propTypes = {
            percentage: PropTypes.number.isRequired,
            minutes: PropTypes.number.isRequired,
            seconds: PropTypes.number.isRequired,
            onStart: PropTypes.func.isRequired,
            onPause: PropTypes.func.isRequired,
            onReset: PropTypes.func.isRequired,
            isRunning: PropTypes.bool,
            hasFinished: PropTypes.bool
        };

        getPercentage(value) {
            let radius = 150;
            let circumference = Math.PI * (radius * 2);

            return (value / 100) * circumference;
        }

        getValue() {
            let value = this.props.percentage;

            if (value < 0) {
                value = 0;
            }

            if (value > 100) {
                value = 100;
            }

            return value;
        }

        render() {
            let value = this.getValue();
            let pct = {'strokeDashoffset': this.getPercentage(value)};

            return (
                <div className="tomato-control text-center" data-pct="100">
                    <svg className="svg" viewBox="0 0 310 310" version="1.1">
                        <circle r="150" cx="50%" cy="50%" fill="transparent"></circle>
                        <circle className="bar" style={pct} r="150" cx="-50%" cy="50%" fill="transparent"></circle>
                    </svg>

                    <div className="timer">
                        {formatTime(this.props.minutes)}:{formatTime(this.props.seconds)}
                    </div>

                    <div className="control">
                        <PlayButton
                            onStart={this.props.onStart}
                            onPause={this.props.onPause}
                            isRunning={this.props.isRunning}
                        />

                        <RepeatButton
                            onClick={this.props.onReset}
                        />
                    </div>
                </div>
            );
        }

    }

    return TomatoControl;
}
