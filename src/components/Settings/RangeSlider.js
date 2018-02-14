import React, { Component } from 'react';
import './RangeSlider.css';

class RangeSlider extends Component {
    handleInputChange = (evt) => {
        const val = evt.target.value;
        this.props.onChange(val);
    };

    render() {
        return (
            <div className="range-slider">
                <input
                    className={ 'range' + (this.props.showValueLabel ? ' with-label' : '') }
                    type="range"
                    value={ this.props.value }
                    onChange={ this.handleInputChange }
                    step={ this.props.step || 60 }
                    min={ this.props.min || 5 * 60 }
                    max={ this.props.max || 30 * 60 }
                />
                { this.props.showValueLabel &&
                <span className="value">{ this.props.formattedValue || this.props.value }</span> }
            </div>
        )
    }
}

export default RangeSlider;
