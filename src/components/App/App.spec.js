/* global jest, it, expect */

import React from 'react';
import ReactDOM from 'react-dom';

const mockRequestPermission = jest.fn();

jest.mock('../../lib/notification', () => {
    return { requestPermission: mockRequestPermission }
});

const mockEmptyElement = () => (<div></div>);

jest.mock('../TomatoTimer', () => mockEmptyElement);
jest.mock('../StepSelector', () => mockEmptyElement);
jest.mock('../TomatorosCounter', () => mockEmptyElement);

jest.mock('../TopNav/TopNav', () => mockEmptyElement);
jest.mock('../HowItWorks/HowItWorks', () => mockEmptyElement);
jest.mock('../Contact/Contact', () => mockEmptyElement);
jest.mock('../Footer/Footer', () => mockEmptyElement);

it('renders without crashing and calls mockRequestPermission on mount', () => {
    let App = require('./App').default;

    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);

    expect(mockRequestPermission).toHaveBeenCalledTimes(1);
});
