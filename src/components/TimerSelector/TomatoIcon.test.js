import React from 'react';
import ReactDOM from 'react-dom';
import tomatoIconFactory from './TomatoIcon';

describe('TomatoIconComponent', () => {

    let TomatoIcon;

    beforeEach(() => {
        TomatoIcon = tomatoIconFactory(React);
    });

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TomatoIcon/>, div);
    });
});
