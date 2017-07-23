import './Footer.css';

export default function (React) {
    class Footer extends React.Component {
        render() {
            return (
                <footer>
                    <div className="container">
                        <div className="col-50">
                            <a href="http://softwaredevtools.com/" target="_blank" rel="noopener noreferrer">
                                <img src="svg/logo-softwaredevtools-white.svg" alt="logo-softwaredevtools"
                                     className="logo"/>
                            </a>
                        </div>

                        <div className="col-25">
                            <h2>Tools</h2>

                            <ul>
                                <li>
                                    <a href="https://planningwith.cards/" target="_blank" rel="noopener noreferrer">PlanningWith.Cards</a>
                                </li>
                                <li>
                                    <a href="http://softwaredevtools.com/retrospectives/" target="_blank"
                                       rel="noopener noreferrer">Retrospectives</a>
                                </li>
                                <li>
                                    <a href="http://softwaredevtools.com/scrum-poker/" target="_blank"
                                       rel="noopener noreferrer">Scrum Poker</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-25">
                            <h2>Get in touch</h2>

                            <ul>
                                <li>
                                    <a href="https://docs.google.com/forms/d/1uPjLKnytNSsD0oZFl0FBaexsefdXK-tcy4aAR0U0wlA/viewform"
                                       target="_blank" rel="noopener noreferrer">Support</a>
                                </li>
                                <li>
                                    <a href="http://softwaredevtools.com/blog/" target="_blank"
                                       rel="noopener noreferrer">Medium Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="container long-spacing">
                        <div className="col-50">
                            &nbsp;
                        </div>

                        <div className="col-25">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mytomatoro/">
                                <img src="svg/icon-facebook.svg" alt="icon-facebook"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mytomatoro">
                                <img src="svg/icon-twitter.svg" alt="icon-twitter"/>
                            </a>
                        </div>

                        <div className="col-25">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://docs.google.com/forms/d/1uPjLKnytNSsD0oZFl0FBaexsefdXK-tcy4aAR0U0wlA/viewform">
                                <img src="svg/logo-labs-white.svg" alt="logo-labs-white"/>
                            </a>
                        </div>
                    </div>

                    <div className="container">
                        <p className="copy">
                            ©2017 Nearsoft Labs. All Rights Reserved —&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="/privacy">Terms and Conditions</a>
                        </p>
                    </div>
                </footer>
            );
        }
    }

    return Footer;
}
