import React from 'react';
import ReactDOM from 'react-dom';
import footerFactory from './Footer';

describe('FooterComponent', () => {

    let Footer;

    beforeEach(() => {
        Footer = footerFactory(React);
    });

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer/>, div);
    });
});
