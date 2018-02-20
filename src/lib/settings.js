/* global global */

const STORAGE_ITEM_NAME = 'MY_TOMATORO_SETTINGS';

export const getSettings = () => {
    console.log('afa');
    const settings = global.localStorage.getItem(STORAGE_ITEM_NAME);

    if (settings) {
        return JSON.parse(settings);
    } else {
        return null;
    }
};

export const saveSettings = (settings) => {
    global.localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(settings));
};

export const dropSettings = () => {
    global.localStorage.removeItem(STORAGE_ITEM_NAME);
};
