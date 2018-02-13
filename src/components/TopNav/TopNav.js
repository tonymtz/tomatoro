import React, { Component } from 'react';
import './TopNav.css';

class Menu extends Component {
    scrollTo = (evt) => {
        let target = document.querySelector(evt.target.dataset.scrollTo);

        if (!target) {
            return console.log('"scroll-to" not specified');
        }

        window.scrollTo(0, target.offsetTop);
    };

    render() {
        return (
            <nav className="top-nav">
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <img src="svg/logo-tomatoro.svg" alt="tomatoro logo"/>
                        </a>
                    </div>

                    <ul>
                        <li>
                            <a href="#!" onClick={ this.scrollTo } data-scroll-to=".how-it-works">How It Works</a>
                        </li>

                        <li>
                            <a href="#!" onClick={ this.scrollTo } data-scroll-to=".contact">Contact</a>
                        </li>

                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="http://softwaredevtools.com/">
                                SoftwareDevTools
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
