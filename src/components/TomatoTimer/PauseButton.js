import React from 'react';

export default ({ onClick }) => (
    <button className="play-button" onClick={ onClick }>
        <svg className="pause--state" width="50px" height="50px" viewBox="0 0 83 82" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
            <title>icon-pause</title>
            <ellipse cx="41.49374" cy="40.9938154" rx="41.49374" ry="40.9938154"/>
            <g transform="translate(30.000000, 24.000000)">
                <rect x="0" y="0" width="9" height="33" rx="3"/>
                <rect x="13" y="0" width="9" height="33" rx="3"/>
            </g>
        </svg>
    </button>
);
