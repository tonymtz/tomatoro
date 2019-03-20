import React from 'react';

export default () => (
    <div className="container">
        <div className="row">
            <div className="twelve column">
                <h1>How to be more productive</h1>

                <div className="row">
                    <div className="twelve column">
                        <iframe
                            title="tutorial"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/WqBuh4HWu8U"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    </div>
                </div>

                <div className="row">
                    <div className="one-third column">
                        <img src="svg/graphic-set-time.svg" alt="graphic-set-time"/>
                        <h2>Set the Time</h2>
                    </div>

                    <div className="one-third column">
                        <img src="svg/graphic-take-break.svg" alt="graphic-take-break"/>
                        <h2>Take a Break</h2>
                    </div>

                    <div className="one-third column">
                        <img src="svg/graphic-repeat.svg" alt="graphic-repeat"/>
                        <h2>Repeat</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="twelve column">
                        <p>To boost your productivity use the Pomodoro technique. Just alternate cycles of hyper-focus
                            on work with short breaks of relaxation.</p>

                        <p>For each 25 mins of work or Tomatoros, take a 5 mins break. After completing 3 Tomatoros,
                            take a longer 15 mins break. Repeat this cycle!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
