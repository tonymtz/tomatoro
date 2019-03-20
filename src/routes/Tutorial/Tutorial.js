import React from 'react';

import Stepper from 'components/Stepper';

const tutorialSteps = [
    (<div className="row">
        <div className="twelve column">
            <p>What Tomatoro can do for you.</p>
            <iframe
                title="tutorial"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WqBuh4HWu8U"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
            <p>For each 25 mins of work or Tomatoros, take a 5 mins break. After completing 3 Tomatoros,
                take a longer 15 mins break. Repeat this cycle!</p>
        </div>
    </div>),
    (<div className="row">
        <div className="twelve column">
            <h2>Set the Time</h2>
            <img src="svg/graphic-set-time.svg" alt="graphic-set-time"/>
        </div>
    </div>),
    (<div className="row">
        <div className="twelve column">
            <h2>Take a Break</h2>
            <img src="svg/graphic-take-break.svg" alt="graphic-take-break"/>
        </div>
    </div>),
    (<div className="row">
        <div className="twelve column">
            <h2>Repeat</h2>
            <img src="svg/graphic-repeat.svg" alt="graphic-repeat"/>
        </div>
    </div>)
];

export default () => (
    <div className="container">
        <div className="row">
            <div className="twelve column">
                <h1>How to be more productive</h1>

                <hr/>

                <div className="row">
                    <div className="twelve column">
                        <Stepper steps={ tutorialSteps }/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
