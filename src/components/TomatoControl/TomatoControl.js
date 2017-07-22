import './TomatoControl.css';

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

export default function (React, PropTypes) {
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
            onStop: PropTypes.func.isRequired,
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

            let centerButton;

            if (this.props.isRunning) {
                centerButton = (
                    <button onClick={this.props.onPause}>||</button>
                );
            } else {
                centerButton = (
                    <button onClick={this.props.onStart} disabled={this.props.hasFinished}>
                        <img src="svg/icon-play.svg" alt="icon-play"/>
                    </button>
                );
            }

            return (
                <div className="tomato-control text-center" data-pct="100">
                    <svg className="svg" width="420" height="420" viewBox="0 0 420 420" version="1.1">
                        <circle r="150" cx="210" cy="185" fill="transparent"></circle>
                        <circle className="bar" style={pct} r="150" cx="-185" cy="210" fill="transparent"></circle>
                    </svg>

                    <div className="timer">
                        {formatTime(this.props.minutes)}:{formatTime(this.props.seconds)}
                    </div>

                    <div className="control">
                        <button onClick={this.props.onStop}>
                            <img src="svg/icon-stop.svg" alt="icon-stop"/>
                        </button>

                        {centerButton}

                        <button>
                            <img src="svg/icon-refresh.svg" alt="icon-refresh"/>
                        </button>
                    </div>
                </div>
            );
        }

    }

    return TomatoControl;
}
