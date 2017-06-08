import {POMODORO_COMPLETED_BODY, POMODORO_COMPLETED_ICON, POMODORO_COMPLETED_TITLE} from "../../constants/AppConstants";

export default function (React, PomodoroStore) {
  class Notifications extends React.Component {

    requestPermission() {
      if (!('Notification' in window)) {
        alert('This browser does not support desktop notification');
        return;
      }
      Notification.requestPermission();
    }

    havePermission() {
      return Notification.permission === 'granted';
    }

    notify() {

      if (!this.havePermission()) {
        return;
      }

      let options = {
        body: POMODORO_COMPLETED_BODY,
        icon: POMODORO_COMPLETED_ICON
      };

      let notification = new Notification(POMODORO_COMPLETED_TITLE, options);

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      let audioElement = document.getElementById('play');
      audioElement.volume = 0.2;
      audioElement.play();
    }

    componentDidMount() {
      PomodoroStore.addChangeListener(this.onChange);

      if (!this.havePermission()) {
        this.requestPermission();
      }
    }

    componentWillUnmount() {
      PomodoroStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
      let pomodoroState = PomodoroStore.get();

      if (pomodoroState.hasFinished) {
        this.notify();
      }
    };

    render() {
      return (
        <audio id="play"
               src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Doorbell-old-tring.ogg"></audio>
      );
    }
  }

  return Notifications;
}
