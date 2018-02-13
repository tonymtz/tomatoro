// import { startTimer, TIMER_START } from './timer';
//
// const initState = {
//     interval: null
// };
//
// // export const updateStep = (step) => ({ type: STEP_UPDATE, payload: step });
//
// const progress = () => {
//     store.dispatch({
//         type: 'TICK',
//         time: Date.now()
//     });
//     this._interval = requestAnimationFrame(this.progress);
// };
//
// export default (state = initState, action) => {
//     switch (action.type) {
//         case TIMER_START:
//             return {
//                 ...state,
//                 interval: requestAnimationFrame()
//             };
//         default:
//             return state;
//     }
// };
