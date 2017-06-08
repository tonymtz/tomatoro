import {MINUTE} from "../../constants/AppConstants";

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

export default function (React, pomodoroStore, pomodoroActions, RangeSlider) {

  function getSettingsStore() {
    let pomodoroStoreSnapshot = pomodoroStore.get();

    return {
      pomodoroDuration: pomodoroStoreSnapshot.pomodoroDuration,
      breakShortDuration: pomodoroStoreSnapshot.breakShortDuration,
      breakLongDuration: pomodoroStoreSnapshot.breakLongDuration
    };
  }

  class App extends React.Component {

    state = getSettingsStore();

    componentDidMount() {
      pomodoroStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
      pomodoroStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
      this.setState(getSettingsStore());
    };

    onPomodoroDurationChange = (event) => {
      pomodoroActions.updatePomodoroDuration(event.target.valueAsNumber);
    };

    onShortBreakDurationChange = (event) => {
      pomodoroActions.updateShortBreakDuration(event.target.valueAsNumber);
    };

    onLongBreakDurationChange = (event) => {
      pomodoroActions.updateLongBreakDuration(event.target.valueAsNumber);
    };

    getFormattedValue(time) {
      let minutes = Math.floor(time / 1000 / 60);
      let seconds = Math.floor(time / 1000 % 60);

      return `${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    render() {
      return (
        <div className="grid-container grid-parent">
          <div className="grid-100">
            <h1>Settings</h1>
          </div>

          <div className="grid-100">
            <label htmlFor="pomodoroDuration">Pomodoro Duration:</label>
            <RangeSlider
              name="pomodoroDuration"
              value={this.state.pomodoroDuration}
              max={MINUTE * 25}
              min={MINUTE * 5}
              step={MINUTE}
              onSliderChange={this.onPomodoroDurationChange}
              showValueLabel={true}
              formattedValue={this.getFormattedValue(this.state.pomodoroDuration)}
            />
          </div>

          <br/>

          <div className="grid-100">
            <label htmlFor="breakShortDuration">Short Break Duration:</label>
            <RangeSlider
              name="breakShortDuration"
              value={this.state.breakShortDuration}
              max={MINUTE * 10}
              min={MINUTE * 1}
              step={MINUTE}
              onSliderChange={this.onShortBreakDurationChange}
              showValueLabel={true}
              formattedValue={this.getFormattedValue(this.state.breakShortDuration)}
            />
          </div>

          <br/>

          <div className="grid-100">
            <label htmlFor="breakLongDuration">Long Break Duration:</label>
            <RangeSlider
              name="breakLongDuration"
              value={this.state.breakLongDuration}
              max={MINUTE * 25}
              min={MINUTE * 5}
              step={MINUTE}
              onSliderChange={this.onLongBreakDurationChange}
              showValueLabel={true}
              formattedValue={this.getFormattedValue(this.state.breakLongDuration)}
            />
          </div>

          {/*<ul>todo*/}
          {/*<li>pomodoro duration</li>*/}
          {/*<li>short break duration</li>*/}
          {/*<li>long break duration</li>*/}
          {/*<li>target pomodoros per day</li>*/}
          {/*<li>---</li>*/}
          {/*<li>ring volume</li>*/}
          {/*<li>ring type</li>*/}
          {/*<li>theme</li>*/}
          {/*</ul>*/}
        </div>
      );
    }
  }

  return App;
}
