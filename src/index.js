/* eslint import/first: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import registerServiceWorker from './registerServiceWorker';
import 'unsemantic/assets/stylesheets/unsemantic-grid-responsive-no-ie7.css';
import 'typicons.font';
import './index.css';

/****** ACTIONS ******/
import pomodoroActions from './actions/PomodoroActions';

/****** STORES ******/
import pomodoroStoreFactory from './stores/PomodoroStore';
let pomodoroStore = pomodoroStoreFactory();

/****** COMPONENTS ******/
import tomatoIconFactory from './components/TimerSelector/TomatoIcon';
let TomatoIcon = tomatoIconFactory(React);
import playButtonFactory from './components/TomatoControl/PlayButton';
let PlayButton = playButtonFactory(React, PropTypes);
// import stopButtonFactory from './components/TomatoControl/StopButton';
// let StopButton = stopButtonFactory(React, PropTypes);
import repeatButtonFactory from './components/TomatoControl/RepeatButton';
let RepeatButton = repeatButtonFactory(React, PropTypes);

import topNavFactory from './components/TopNav/TopNav';
let TopNav = topNavFactory(React);
import tomatoCounterFactory from './components/TomatoControl/TomatoControl';
let TomatoControl = tomatoCounterFactory(React, PropTypes, PlayButton, RepeatButton);
import howItWorksFactory from './components/HowItWorks/HowItWorks';
let HowItWorks = howItWorksFactory(React);
import contactFactory from './components/Contact/Contact';
let Contact = contactFactory(React);
import footerFactory from './components/Footer/Footer';
let Footer = footerFactory(React);

import notificationsFactory from './components/Notifications/Notifications';
let Notifications = notificationsFactory(React, pomodoroStore);
import timerSelectorFactory from './components/TimerSelector/TimerSelector';
let TimerSelector = timerSelectorFactory(React, PropTypes, TomatoIcon);
// import rangeSliderFactory from './components/RangeSlider/RangeSlider';
// let RangeSlider = rangeSliderFactory(React, PropTypes);

/****** ROUTES ******/
import appFactory from './routes/App/App';
let App = appFactory(React, pomodoroStore, pomodoroActions, TomatoControl, TimerSelector);
// import settingsFactory from './routes/Settings/Settings';
// let Settings = settingsFactory(React, pomodoroStore, pomodoroActions, RangeSlider);

ReactDOM.render(
    <div>
        <TopNav/>
        <App/>

        <hr/>

        <HowItWorks/>

        <hr/>

        <Contact/>
        <Footer/>
        <Notifications/>
    </div>,
    document.getElementById('root')
);
//registerServiceWorker();
