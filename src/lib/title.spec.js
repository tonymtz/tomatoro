/* global jest, describe, test, expect, global */

import { updateTitle } from './title';

test('#updateTitle', () => {
    const input1 = '59';
    const expected1 = '(00:59) - Tomatoro';

    const input2 = '60';
    const expected2 = '(01:00) - Tomatoro';

    const input3 = '130';
    const expected3 = '(02:10) - Tomatoro';

    const input4 = '659';
    const expected4 = '(10:59) - Tomatoro';

    const input5 = '';
    const expected5 = 'Tomatoro';

    updateTitle(input1);
    expect(global.document.title).toEqual(expected1);

    updateTitle(input2);
    expect(global.document.title).toEqual(expected2);

    updateTitle(input3);
    expect(global.document.title).toEqual(expected3);

    updateTitle(input4);
    expect(global.document.title).toEqual(expected4);

    updateTitle(input5);
    expect(global.document.title).toEqual(expected5);
});
