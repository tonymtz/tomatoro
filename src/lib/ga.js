/* global global, process */

import {
    SEND,
    EVENT_TYPE,
    EVENT_CATEGORY_WORK_CYCLE,
    EVENT_CATEGORY_SHORT_BREAK_CYCLE,
    EVENT_CATEGORY_LONG_BREAK_CYCLE,
    EVENT_LABEL_COMPLETE,
    EVENT_VALUE_COMPLETE, GENERIC_CATEGORY, GENERIC_ACTION, GENERIC_LABEL
} from 'constants';

const ga = (function (ga) {

    let gaService;

    if (process.env.NODE_ENV === 'production') {
        gaService = ga;
    } else if (process.env.NODE_ENV === 'test') {
        gaService = function () {
            // silent on tests
        };
    } else {
        gaService = function () {
            // empty function
            console.log('[MOCK] GA EVENT:', arguments);
        };
    }

    gaService('create', 'UA-103153391-1', 'auto');
    gaService('send', 'pageview');

    return gaService;

}(global.ga));

export const workCycleComplete = () => {
    ga(SEND, EVENT_TYPE, EVENT_CATEGORY_WORK_CYCLE, EVENT_LABEL_COMPLETE, EVENT_VALUE_COMPLETE);
};

export const shortBreakCycleComplete = () => {
    ga(SEND, EVENT_TYPE, EVENT_CATEGORY_SHORT_BREAK_CYCLE, EVENT_LABEL_COMPLETE, EVENT_VALUE_COMPLETE);
};

export const longBreakCycleComplete = () => {
    ga(SEND, EVENT_TYPE, EVENT_CATEGORY_LONG_BREAK_CYCLE, EVENT_LABEL_COMPLETE, EVENT_VALUE_COMPLETE);
};

export const openSettingsPopup = () => {
    ga(SEND, EVENT_TYPE, GENERIC_CATEGORY, GENERIC_ACTION, GENERIC_LABEL, EVENT_VALUE_COMPLETE);
};