import {
    SEND,
    EVENT_TYPE,
    EVENT_CATEGORY_WORK_CYCLE,
    EVENT_CATEGORY_SHORT_BREAK_CYCLE,
    EVENT_CATEGORY_LONG_BREAK_CYCLE,
    EVENT_LABEL_COMPLETE,
    EVENT_VALUE_COMPLETE
} from '../constants/GAConstants';

import {DEBUG} from "../constants/AppConstants";

let ga = (function (ga) {

    if (ga && !DEBUG) {
        return ga;
    }

    return function () {
        /* empty function */
        console.log('GA EVENT:', arguments);
    };

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
    }

};
