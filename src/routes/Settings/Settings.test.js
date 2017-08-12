import React from 'react';
import {shallow} from 'enzyme';
import settingsFactory from './Settings';

let Settings;

const pomodoroStoreStub = {
    get: function () {
        return {
            totalTime: 0,
            timeLeft: 0
        };
    },

    addChangeListener: jest.fn()
};

describe('Settings', () => {

    beforeEach(() => {
        Settings = settingsFactory(React, pomodoroStoreStub, {}, null);
    });

    it('should render without crashing', () => {
        shallow(<App/>);
    });
});
