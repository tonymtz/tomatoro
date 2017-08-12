import React from 'react';
import ReactDOM from 'react-dom';
import howItWorksFactory from './Settings';

describe('Settings', () => {

    let Settings;

    beforeEach(() => {
        Settings = howItWorksFactory(React);
    });

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Settings/>, div);
    });
});
