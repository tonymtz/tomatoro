import React from 'react';
import {shallow} from 'enzyme';
import appFactory from './App';

let App;

const pomodoroStoreStub = {
    get: function () {
        return {
            totalTime: 0,
            timeLeft: 0
        };
    },

    addChangeListener: jest.fn()
};

describe('App', () => {

    beforeEach(function () {
        App = appFactory(React, pomodoroStoreStub, {}, 'div', 'div');
    });

    it('renders without crashing', () => {
        shallow(<App/>);
    });

});
