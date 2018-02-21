/* global jest, describe, test, expect, global */

import { padTime, secondsToTimeFormat } from './format';

test('#padTime', () => {
    const input1 = '1';
    const expected1 = '01';

    const input2 = '10';
    const expected2 = '10';

    expect(padTime(input1)).toEqual(expected1);
    expect(padTime(input2)).toEqual(expected2);
});

test('#secondsToTimeFormat', () => {
    const input1 = '59';
    const expected1 = '00:59';

    const input2 = '60';
    const expected2 = '01:00';

    const input3 = '130';
    const expected3 = '02:10';

    const input4 = '659';
    const expected4 = '10:59';

    expect(secondsToTimeFormat(input1)).toEqual(expected1);
    expect(secondsToTimeFormat(input2)).toEqual(expected2);
    expect(secondsToTimeFormat(input3)).toEqual(expected3);
    expect(secondsToTimeFormat(input4)).toEqual(expected4);
});
