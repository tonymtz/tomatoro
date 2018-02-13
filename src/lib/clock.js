/* global global */

export const sleepASecond = () => {

    /* setTimeout */

    return new Promise((resolve) => {
        global.setTimeout(() => {
            resolve();
        }, 1000);
    });
};
