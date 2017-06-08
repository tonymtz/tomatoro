import "./TimerControl.css";

export default function (React, PropTypes) {

  class TimerControl extends React.Component {

    static defaultProps = {
      isRunning: false,
      hasFinished: false
    };

    static propTypes = {
      onStart: PropTypes.func.isRequired,
      onPause: PropTypes.func.isRequired,
      onStop: PropTypes.func.isRequired,
      isRunning: PropTypes.bool,
      hasFinished: PropTypes.bool
    };

    render() {
      let leftButton;

      if (this.props.isRunning) {
        leftButton = (
          <button className='button rounded' onClick={this.props.onPause}>
            <span className="typcn typcn-media-pause"></span><br/>
            Pause
          </button>
        );
      } else {
        leftButton = (
          <button className='button rounded' disabled={this.props.hasFinished} onClick={this.props.onStart}>
            <span className="typcn typcn-media-play"></span><br/>
            Play
          </button>
        );
      }

      return (
        <div className="timer">

          <div className='small-12 medium-6 float-center'>
            <div className='expanded large button-group'>
              {leftButton}
              <button className='button rounded' onClick={this.props.onStop}>
                <span className="typcn typcn-media-stop"></span><br/>
                Stop
              </button>
            </div>
          </div>

        </div>
      );
    }

  }

  return TimerControl;
}
