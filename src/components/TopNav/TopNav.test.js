/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './TopNav';

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopNav/>, div);
});
