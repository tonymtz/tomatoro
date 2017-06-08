import "./RadialCounter.css";

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

export default function (React, PropTypes) {

  class RadialCounter extends React.Component {

    static defaultProps = {
      percentage: 0,
      minutes: 0,
      seconds: 0
    };

    static propTypes = {
      percentage: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired
    };

    getPercentage(value) {
      let radius = 110;
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
        <div className="container" data-pct="100">
          <svg className="svg" width="240" height="240" viewBox="0 0 240 240" version="1.1">
            <circle r="110" cx="120" cy="120" fill="transparent"></circle>
            <circle className="bar" style={pct} r="110" cx="-120" cy="120" fill="transparent"></circle>
          </svg>
          <div className="time">
            {formatTime(this.props.minutes)}:{formatTime(this.props.seconds)}</div>
        </div>
      );
    }

  }

  return RadialCounter;
}
