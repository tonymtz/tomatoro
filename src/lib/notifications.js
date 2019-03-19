/* global global */

const havePermission = () => {
    return global.Notification.permission === 'granted';
};

export const requestPermission = () => {
    if (!havePermission()) {
        global.Notification.requestPermission();
    }
};

export const sendNotification = (isStepWork) => {
    if (!havePermission()) {
        requestPermission();
        return;
    }

    const TITLE = isStepWork ? 'Pomodoro completed' : 'Break completed';
    const BODY = isStepWork ? 'Take a Break!' : 'Time to get things done!';

    let options = {
        body: BODY,
        icon: 'favicon/favicon-96x96.png'
    };

    let notification = new Notification(TITLE, options);

    notification.onclick = () => {
        window.focus();
        notification.close();
    };
};
