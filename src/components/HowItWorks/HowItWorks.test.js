/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import HowItWorks from './HowItWorks';

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HowItWorks/>, div);
});
