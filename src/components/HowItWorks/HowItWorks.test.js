import React from 'react';
import ReactDOM from 'react-dom';
import howItWorksFactory from './HowItWorks';

describe.skip('HowItWorksComponent', () => {

    let HowItWorks;

    beforeEach(() => {
        HowItWorks = howItWorksFactory(React);
    });

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HowItWorks/>, div);
    });
});
