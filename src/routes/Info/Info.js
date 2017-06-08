export default function (React) {
  class Info extends React.Component {
    render() {
      return (
        <div className="grid-container grid-parent">
          <div className="grid-100">
            <h1>Instructions</h1>
          </div>

          <div className="grid-100">
            <p>There are five simple steps:</p>

            <ol>
              <li>Choose a task to be accomplished</li>
              <li>Start the pomodoro timer</li>
              <li>Work on the task until the timer rings, then verify the tomato count</li>
              <li>If you have fewer than four tomato marks, take a short break (3-5 minutes), then go to
                step
                2
              </li>
              <li>After 4 pomodoros, take a longer break (15-30 minutes), refresh the page to restart the
                tomato counter,
                then go to step 1
              </li>
            </ol>

            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank"
               rel="noopener noreferrer">Read more about this
              technique
              here!</a>
          </div>
        </div>
      );
    }
  }

  return Info;
}
