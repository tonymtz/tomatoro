/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact/>, div);
});
