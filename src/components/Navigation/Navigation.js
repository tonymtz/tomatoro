import React from 'react';
import { Link } from 'react-router-dom';

import {
    TiStopwatch,
    TiStarFullOutline,
    // TiChartArea,
    TiCog,
    // TiLightbulb
} from 'react-icons/lib/ti';

import './Navigation.scss';

export default () => (
    <nav>

        <div className="logo">
            <img src="svg/logo-small.svg" alt="tomatoro"/>
        </div>

        <ul>
            <li>
                <Link to='/'>
                    <TiStopwatch/>
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to='/tutorial'>
                    <TiStarFullOutline/>
                    <span>Tutorial</span>
                </Link>
            </li>
            {/*<li>*/}
                {/*<Link to='/dashboard'>*/}
                    {/*<TiChartArea/>*/}
                    {/*<span>Dashboard</span>*/}
                {/*</Link>*/}
            {/*</li>*/}
            <li>
                <Link to='/settings'>
                    <TiCog/>
                    <span>Settings</span>
                </Link>
            </li>
            {/*<li>*/}
                {/*<Link to='/home'>*/}
                    {/*<TiLightbulb/>*/}
                    {/*<span>Get Plus</span>*/}
                {/*</Link>*/}
            {/*</li>*/}
        </ul>

        {/*<ul className="sub">*/}
            {/*<li>*/}
                {/*<Link to='/register'>Create Account</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
                {/*<Link to='/login'>Sign In</Link>*/}
            {/*</li>*/}
        {/*</ul>*/}
    </nav>
);
