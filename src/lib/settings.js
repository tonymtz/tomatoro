/* global global */

const STORAGE_ITEM_NAME = 'MY_TOMATORO_SETTINGS';

export const getSettings = () => {
    const localStorage = global.localStorage;
    const settings = localStorage.getItem(STORAGE_ITEM_NAME);

    if (settings) {
        return JSON.parse(settings);
    } else {
        return null;
    }
};

export const saveSettings = (settings) => {
    const localStorage = global.localStorage;
    localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(settings));
};

export const resetSettings = () => {
    const localStorage = global.localStorage;
    localStorage.removeItem(STORAGE_ITEM_NAME);
};
