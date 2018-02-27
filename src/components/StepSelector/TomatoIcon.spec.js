/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import TomatoIcon from './TomatoIcon';

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TomatoIcon/>, div);
});
