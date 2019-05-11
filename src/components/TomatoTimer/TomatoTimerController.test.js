import sinon from 'sinon';
import { expect } from 'chai';

import { emptyFn } from 'appConstants';
import { getDummyComponent } from 'testUtils';

import TomatoTimerController from './TomatoTimerController';

describe('<TomatoTimerController/>', () => {
    it('should return an object', () => {
        const subject = TomatoTimerController();
        expect(subject).to.be.an('object').that.has.all.keys('start', 'pause', 'reset', '_tick');
    });

    describe('', () => {
        let dummyComponent;
        let subject;

        beforeEach(() => {
            dummyComponent = getDummyComponent();
            subject = TomatoTimerController(dummyComponent);
        });

        describe('#start', () => {
            it('should not call component.setState() when count is less or equal than 0', () => {
                const setStateSpy = sinon.spy(dummyComponent, 'setState');

                dummyComponent.state.count = 0;
                subject.start();

                expect(setStateSpy.called).to.equal(false);

                dummyComponent.state.count = -1;
                subject.start();

                expect(setStateSpy.called).to.equal(false);
            });

            it('should call component.setState() when count is greater than 0', () => {
                const setStateSpy = sinon.spy(dummyComponent, 'setState');

                dummyComponent.state.count = 1;
                subject.start();

                expect(setStateSpy.called).to.equal(true);
                expect(setStateSpy.calledWith({ isRunning: true })).to.equal(true);
            });
        });

        it('#pause should call component.setState()', () => {
            const setStateSpy = sinon.spy(dummyComponent, 'setState');

            subject.pause();

            expect(setStateSpy.calledWith({ isRunning: false })).to.equal(true);
        });

        it('#reset should call component.setState()', () => {
            const setStateSpy = sinon.spy(dummyComponent, 'setState');

            dummyComponent.props.seconds = 9;
            subject.reset();

            expect(setStateSpy.calledWith({ isRunning: false, count: 9 })).to.equal(true);
        });

        describe('#_tick', () => {
            it('should call component.setState() if count can be substracted', () => {
                const setStateSpy = sinon.spy(dummyComponent, 'setState');

                dummyComponent.state.count = 0;
                dummyComponent.props.onComplete = emptyFn;
                subject._tick();

                expect(setStateSpy.called).to.equal(true);
                expect(setStateSpy.calledWith({ isRunning: false }, emptyFn)).to.equal(true);
            });

            it('should call component.setState() if count cannot be substracted', () => {
                const setStateSpy = sinon.spy(dummyComponent, 'setState');

                dummyComponent.state.count = 1;
                dummyComponent.props.onTick = emptyFn;
                subject._tick();

                expect(setStateSpy.called).to.equal(true);
                expect(setStateSpy.calledWith({ count: 0 })).to.equal(true);
            });
        });
    });
});
