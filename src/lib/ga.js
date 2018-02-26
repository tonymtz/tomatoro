/* global global, process */

import {
    SEND,
    EVENT_TYPE,
    EVENT_CATEGORY_WORK_CYCLE,
    EVENT_CATEGORY_SHORT_BREAK_CYCLE,
    EVENT_CATEGORY_LONG_BREAK_CYCLE,
    EVENT_LABEL_COMPLETE,
    EVENT_VALUE_COMPLETE, GENERIC_CATEGORY, GENERIC_ACTION, GENERIC_LABEL
} from '../constants';

const ga = (function (ga) {

    if (process.env.NODE_ENV === 'production') {
        return ga;
    }

    if (process.env.NODE_ENV === 'test') {
        return function () {
        }; // silent on tests
    }

    return function () {
        /* empty function */
        console.log('[MOCK] GA EVENT:', arguments);
    };

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
