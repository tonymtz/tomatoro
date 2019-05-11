import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import TomatoTimer from './TomatoTimer';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import RepeatButton from './RepeatButton';

describe('<TomatoTimer/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TomatoTimer seconds={ 2 }/>)
    });

    it('initial state is correct', () => {
        expect(wrapper.instance().state).to.deep.equal({
            count: 2,
            isRunning: false
        });
    });

    it('#componentWillUnmount', () => {
        const instance = wrapper.instance();
        const pauseSpy = sinon.spy(instance.controller, 'pause');

        instance.componentWillUnmount();

        expect(pauseSpy.calledOnce).to.equal(true);
    });

    describe('render', () => {
        it('should render play button when not isRunning', () => {
            wrapper.instance().setState({ isRunning: false });

            expect(wrapper.find('.control').find(PlayButton)).to.have.length(1);
            expect(wrapper.find('.control').find(RepeatButton)).to.have.length(1);
        });

        it('should render pause button when isRunning', () => {
            wrapper.instance().setState({ isRunning: true });

            expect(wrapper.find('.control').find(PauseButton)).to.have.length(1);
            expect(wrapper.find('.control').find(RepeatButton)).to.have.length(1);
        })
    });
});
