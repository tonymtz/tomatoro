import { SECOND } from 'appConstants';

export default function TomatoTimerController(component) {
    let intervalId;

    return {
        start,
        pause,
        reset,
        _tick
    };

    function start() {
        if (component.state.count <= 0) {
            return;
        }
        intervalId = setInterval(_tick, SECOND);
        component.setState({
            isRunning: true,
        }, component.props.onStart);
    }

    function pause() {
        clearInterval(intervalId);
        intervalId = null;
        component.setState({ isRunning: false }, component.props.onStop);
    }

    function reset() {
        clearInterval(intervalId);
        intervalId = null;
        component.setState({
            count: component.props.seconds,
            isRunning: false,
        }, component.props.onStop);
    }

    function _tick() {
        const { count } = component.state;
        const newCount = count - 1;

        if (newCount < 0) {
            clearInterval(intervalId);
            intervalId = null;
            component.setState({ isRunning: false }, component.props.onComplete);
        } else {
            component.setState({ count: newCount }, () => component.props.onTick({ ...component.state }));
        }
    }
}
