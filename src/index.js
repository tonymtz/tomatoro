/* eslint import/first: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import registerServiceWorker from './registerServiceWorker';
import 'unsemantic/assets/stylesheets/unsemantic-grid-responsive-no-ie7.css';
import 'typicons.font';
import './index.css';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// actions
import pomodoroActions from './actions/PomodoroActions';
// stores
import pomodoroStoreFactory from './stores/PomodoroStore';
// components
import menuFactory from './components/Menu/Menu';
import notificationsFactory from './components/Notifications/Notifications';
import radialCounterFactory from './components/RadialCounter/RadialCounter';
import timerControlFactory from './components/TimerControl/TimerControl';
import timerSelectorFactory from './components/TimerSelector/TimerSelector';
import appFactory from './routes/App/App';
import settingsFactory from './routes/Settings/Settings';
import infoFactory from './routes/Info/Info';
import rangeSliderFactory from './components/RangeSlider/RangeSlider';

let pomodoroStore = pomodoroStoreFactory();
let Menu = menuFactory(React, PropTypes, NavLink);
let Notifications = notificationsFactory(React, pomodoroStore);
let RadialCounter = radialCounterFactory(React, PropTypes);
let TimerControl = timerControlFactory(React, PropTypes);
let TimerSelector = timerSelectorFactory(React, PropTypes);
let RangeSlider = rangeSliderFactory(React, PropTypes);

// routes
let App = appFactory(React, pomodoroStore, pomodoroActions, TimerSelector, RadialCounter, TimerControl);
let Settings = settingsFactory(React, pomodoroStore, pomodoroActions, RangeSlider);
let Info = infoFactory(React);

ReactDOM.render(
  <Router basename='/tomatoro'>
    <div>
      <Menu/>

      <Route exact path='/' component={App}/>
      <Route path='/settings' component={Settings}/>
      <Route path='/info' component={Info}/>

      <Notifications/>
    </div>
  </Router>,
  document.getElementById('root')
);
//registerServiceWorker();
