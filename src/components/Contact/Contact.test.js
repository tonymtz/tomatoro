import React from 'react';
import ReactDOM from 'react-dom';
import contactFactory from './Contact';

describe('ContactComponent', () => {

    let Contact;

    beforeEach(() => {
        Contact = contactFactory(React);
    });

    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Contact/>, div);
    });
});
