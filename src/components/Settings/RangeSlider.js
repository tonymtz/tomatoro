import React, { Component } from 'react';

class RangeSlider extends Component {
    handleInputChange = (evt) => {
        const val = evt.target.value;
        this.props.onChange(val);
    };

    render() {
        return (
            <div className="range-slider">
                <input type="range"
                       value={ this.props.value }
                       onChange={ this.handleInputChange }
                       step={ this.props.step || 60 }
                       min={ this.props.min || 5 * 60 }
                       max={ this.props.max || 30 * 60 }
                />
            </div>
        )
    }
}

export default RangeSlider;

// return (
//     <div className="range-slider">
//         <input className={'range' + (this.props.showValueLabel ? ' with-label' : '')}
//                type="range"
//                value={this.props.value}
//                min={this.props.min}
//                max={this.props.max}
//                step={this.props.step}
//                onChange={this.props.onSliderChange}
//                name={this.props.name}
//         />
//         {this.props.showValueLabel &&
//         <span className="value">{this.props.formattedValue || this.props.value}</span>}
//     </div>
// );