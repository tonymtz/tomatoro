/* global global */

import { secondsToTimeFormat } from './format';

export const APP_TITLE = 'Tomatoro';

export const updateTitle = (timeLabel) => {
    let title;

    if (timeLabel) {
        title = `(${secondsToTimeFormat(timeLabel)}) - ${APP_TITLE}`;
    } else {
        title = APP_TITLE;
    }

    global.document.title = title;
};
