/* global jest, describe, test, expect, global */

import { sleepASecond } from './clock';

describe('#sleepASecond', () => {

    test('uses setTimeout when requestAnimationFrame not available', () => {
        const originalSTImplementation = global.setTimeout;
        const originalRAFImplementation = global.requestAnimationFrame;

        global.setTimeout = jest.fn();
        global.requestAnimationFrame = undefined;

        global.setTimeout
            .mockImplementation(fn => fn());

        expect.assertions(1);

        return sleepASecond()
            .then(() => {
                expect(global.setTimeout).toHaveBeenCalled();
                global.setTimeout = originalRAFImplementation;
                global.requestAnimationFrame = originalSTImplementation;
            });
    });

});
