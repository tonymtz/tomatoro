import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { requestPermission } from 'lib/notifications';

import AppController from 'components/AppController';
import Navigation from 'components/Navigation';
import Home from 'routes/Home';
import Tutorial from 'routes/Tutorial';
import Dashboard from 'routes/Dashboard';
import Settings from 'routes/Settings';
import Register from 'routes/Register';
import Login from 'routes/Login';
import { AppContextProvider } from 'withAppContext';

export default class App extends PureComponent {
    controller = AppController(this);

    state = {
        ...this.controller.getDefaultState()
    };

    componentWillMount() {
        requestPermission();
    }

    componentDidMount() {
        this.controller.loadStateFromLocalStorage();

        global.addEventListener('beforeunload', () => {
            this.controller.saveStateToLocalStorage();
        });
    }

    render() {
        const appContext = {
            ...this.state,
            updateCurrentStep: this.controller.updateCurrentStep,
            updateUserPrefs: this.controller.updateUserPrefs
        };

        return (
            <Router>
                <AppContextProvider value={ appContext }>
                    <div className="sidebar">
                        <Navigation/>
                    </div>

                    <div className="content">
                        <Route path='/' exact component={ Home }/>
                        <Route path='/tutorial' component={ Tutorial }/>
                        <Route path='/dashboard' component={ Dashboard }/>
                        <Route path='/settings' component={ Settings }/>
                        <Route path='/register' component={ Register }/>
                        <Route path='/login' component={ Login }/>
                    </div>
                </AppContextProvider>
            </Router>
        );
    }
};
