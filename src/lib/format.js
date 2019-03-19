export const padTime = (time) => {
    return time < 10 ? '0' + time : time;
};

export const secondsToTimeFormat = (seconds) => {

    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);

    return `${ padTime(minutes) }:${ padTime(secondsLeft) }`;

};
