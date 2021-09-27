import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
                                <a href="https://planningwith.cards/" target="_blank"
                                   rel="noopener noreferrer">PlanningWith.Cards</a>
                            </li>
                            <li>
                                <a href="http://softwaredevtools.com/retrospectives/" target="_blank"
                                   rel="noopener noreferrer">Retrospectives for Confluence</a>
                            </li>
                            <li>
                                <a href="http://softwaredevtools.com/retrospectives/jira" target="_blank"
                                   rel="noopener noreferrer">Retrospectives for Jira</a>
                            </li>
                            <li>
                                <a href="http://softwaredevtools.com/scrum-poker/" target="_blank"
                                   rel="noopener noreferrer">Scrum Poker</a>
                            </li>
                            <li>
                                <a href="https://softwaredevtools.com/stand-bot/" target="_blank"
                                   rel="noopener noreferrer">Standbot for Slack</a>
                            </li>
                            <li>
                                <a href="https://softwaredevtools.com/freshdesk-trello-powerup/" target="_blank"
                                   rel="noopener noreferrer">Freshdesk PowerUp</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-25">
                        <h2>Get in touch</h2>

                        <ul>
                            <li>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScvGhHBkJE_3S05NtU10C7nt65rKNXU-UyBB393CYOAlR_gBQ/viewform"
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
                        ©2017-2021 Tomatoro. All Rights Reserved —&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="/privacy">Terms and Conditions</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
