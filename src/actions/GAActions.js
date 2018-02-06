import {
    SEND,
    EVENT_TYPE,
    EVENT_CATEGORY_WORK_CYCLE,
    EVENT_CATEGORY_SHORT_BREAK_CYCLE,
    EVENT_CATEGORY_LONG_BREAK_CYCLE,
    EVENT_LABEL_COMPLETE,
    EVENT_VALUE_COMPLETE, GENERIC_CATEGORY, GENERIC_ACTION, GENERIC_LABEL
} from '../constants/GAConstants';

let ga = (function (ga) {

    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        return function () {
            /* empty function */
            console.log('[FAKE] GA EVENT:', arguments);
        };
    }

    return ga;

}(window.ga));

export default {

    workCycleComplete() {
        ga(SEND, EVENT_TYPE, EVENT_CATEGORY_WORK_CYCLE, EVENT_LABEL_COMPLETE, EVENT_VALUE_COMPLETE);
    },

    shortBreakCycleComplete() {
        ga(SEND, EVENT_TYPE, EVENT_CATEGORY_SHORT_BREAK_CYCLE, EVENT_LABEL_COMPLETE, EVENT_VALUE_COMPLETE);
    },

    longBreakCycleComplete() {
        ga(SEND, EVENT_TYPE, EVENT_CATEGORY_LONG_BREAK_CYCLE, EVENT_LABEL_COMPLETE, EVENT_VALUE_COMPLETE);
    },

    openSettingsPopup() {
        ga(SEND, EVENT_TYPE, GENERIC_CATEGORY, GENERIC_ACTION, GENERIC_LABEL, EVENT_VALUE_COMPLETE);
    }
};
