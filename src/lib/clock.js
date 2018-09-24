/* global global */

export const sleepASecond = () => {

    /* setTimeout */

    return new Promise((resolve) => {
        global.setTimeout(() => {
            resolve();
        }, 1000);
    });
};

let timer;

export const clockStartTimer = (callback) => {
    timer = setInterval(callback, 1000);
};

export const clockStopTimer = () => {
    clearInterval(timer);
};
