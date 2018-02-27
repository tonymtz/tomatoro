/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RangeSlider/>, div);
});
