export default function (React, PropTypes) {

    class PlayButton extends React.Component {

        static defaultProps = {
            isRunning: false
        };

        static propTypes = {
            onStart: PropTypes.func.isRequired,
            onPause: PropTypes.func.isRequired,
            isRunning: PropTypes.bool
        };

        render() {
            let button;

            if (this.props.isRunning) {
                button = (
                    <svg className="pause--state" width="50px" height="50px" viewBox="0 0 83 82" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>icon-pause</title>
                        <ellipse cx="41.49374" cy="40.9938154" rx="41.49374" ry="40.9938154"></ellipse>
                        <g transform="translate(30.000000, 24.000000)">
                            <rect x="0" y="0" width="9" height="33" rx="3"></rect>
                            <rect x="13" y="0" width="9" height="33" rx="3"></rect>
                        </g>
                    </svg>
                );
            } else {
                button = (
                    <svg className="play--state" width="50px" height="50px" viewBox="0 0 83 82" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>icon-play</title>
                        <ellipse cx="41.49374" cy="40.9938154" rx="41.49374" ry="40.9938154"></ellipse>
                        <path d="M46.8209315,30.4222663 L61.5745951,48.2819644 L61.5745951,48.2819644 C62.278075,49.1335452 62.1580154,50.394171 61.3064345,51.0976508 C60.9479957,51.3937525 60.4975959,51.5557273 60.0326716,51.5557273 L30.5253443,51.5557273 L30.5253443,51.5557273 C29.4207748,51.5557273 28.5253443,50.6602968 28.5253443,49.5557273 C28.5253443,49.090803 28.6873191,48.6404032 28.9834208,48.2819644 L43.7370845,30.4222663 L43.7370845,30.4222663 C44.4405643,29.5706854 45.70119,29.4506259 46.5527709,30.1541057 C46.6504498,30.2347969 46.7402402,30.3245874 46.8209315,30.4222663 Z" transform="translate(44.895636, 40.616628) rotate(90.000000) translate(-44.895636, -40.616628)"></path>
                    </svg>
                );
            }

            return (
                <button className="play-button" onClick={this.props.isRunning ? this.props.onPause : this.props.onStart}>{button}</button>
            );
        }

    }

    return PlayButton;

}
