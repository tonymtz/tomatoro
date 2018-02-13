import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import tomatoroReducer from './reducers/tomatoros';
import timerReducer from './reducers/timer';
import settingsReducer from './reducers/settings';

const reducer = combineReducers({
    tomatoro: tomatoroReducer,
    timer: timerReducer,
    settings: settingsReducer
});

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);
