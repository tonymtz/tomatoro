import React from 'react';
import PropTypes from 'prop-types';

import './RangeSlider.scss';

const RangeSlider = ({ value, min, max, step, onChange, formatValue }) => {
    return (
        <div className="range-slider">
            <input
                className='range with-label'
                type="range"
                value={ value }
                onChange={ evt => onChange(evt.target.value) }
                step={ step }
                min={ min }
                max={ max }
            />
            <span className="value">{ formatValue(value) }</span>
        </div>
    );
};

RangeSlider.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

RangeSlider.defaultProps = {
    step: 60,
    min: 5 * 60,
    max: 30 * 60,
    formatValue: value => value
};

export default RangeSlider;
