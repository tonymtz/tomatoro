import React, { Component } from 'react';
import './App.css';
import TomatoTimer from '../TomatoTimer';
import StepSelector from '../StepSelector';
import TomatorosCounter from '../TomatorosCounter';
import Settings from '../Settings';

import TopNav from '../TopNav/TopNav';
import HowItWorks from '../HowItWorks/HowItWorks';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNav/>

                <div className="container">
                    <div className="col-60">
                        <TomatoTimer/>
                    </div>

                    <div className="col-40">
                        <h1>Take your time. Get things done.</h1>

                        <TomatorosCounter/>

                        <StepSelector/>
                    </div>
                </div>

                <hr/>

                <Settings/>

                <HowItWorks/>

                <hr/>

                <Contact/>

                <Footer/>
            </div>
        );
    }
}

export default App;
