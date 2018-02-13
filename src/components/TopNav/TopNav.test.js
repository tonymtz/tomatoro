import React from 'react';
import ReactDOM from 'react-dom';
import topNavFactory from './TopNav';

describe.skip('TopNavComponent', () => {

    let TopNav;

    beforeEach(() => {
        TopNav = topNavFactory(React);
    });

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TopNav/>, div);
    });
});
