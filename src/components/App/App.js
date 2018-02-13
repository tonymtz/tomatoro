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

                <TomatoTimer/>

                <TomatorosCounter/>

                <StepSelector/>

                <hr/>

                <Settings/>

                <HowItWorks/>

                <Contact/>

                <Footer/>
            </div>
        );
    }
}

export default App;
