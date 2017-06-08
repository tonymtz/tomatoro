import "./RangeSlider.css";
import {MINUTE} from "../../constants/AppConstants";

export default function (React, PropTypes) {

  class RangeSlider extends React.Component {

    static defaultProps = {
      value: 0,
      formattedValue: 0,
      min: 0,
      max: MINUTE * 5,
      step: MINUTE,
      name: Date.now(),
      showValueLabel: false
    };

    static propTypes = {
      onSliderChange: PropTypes.func.isRequired,
      value: PropTypes.number.isRequired,
      formattedValue: PropTypes.string,
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,
      name: PropTypes.string,
      showValueLabel: PropTypes.bool
    };

    render() {
      return (
        <div className="range-slider">
          <input className={'range' + (this.props.showValueLabel ? ' with-label' : '')}
                 type="range"
                 value={this.props.value}
                 min={this.props.min}
                 max={this.props.max}
                 step={this.props.step}
                 onChange={this.props.onSliderChange}
                 name={this.props.name}
          />
          {this.props.showValueLabel &&
          <span className="value">{this.props.formattedValue || this.props.value}</span>}
        </div>
      );
    }

  }

  return RangeSlider;

}
