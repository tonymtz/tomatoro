/* global global */

import { secondsToTimeFormat } from './format';

export const APP_TITLE = 'Tomatoro';

export const updateTitle = (seconds) => {
    let title;

    if (seconds) {
        title = `(${ secondsToTimeFormat(seconds) }) - ${ APP_TITLE }`;
    } else {
        title = APP_TITLE;
    }

    global.document.title = title;
};
