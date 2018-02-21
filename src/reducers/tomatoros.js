import { TOMATORO_ADD } from './constants';

const initState = {
    tomatoros: 0
};

export const addTomatoro = () => ({ type: TOMATORO_ADD });

export default (state = initState, action) => {
    switch (action.type) {
        case TOMATORO_ADD:
            return { ...state, tomatoros: state.tomatoros + 1 };
        default:
            return state;
    }
};
