import { SEGMENTS } from '~/utils/config'

import { TimerContextActionType, TimerContextType } from './timer-context.types'

export const INITIAL_VALUES: TimerContextType = {
  time: SEGMENTS.WORK.time,
  currentSegment: SEGMENTS.WORK.type,
  isRunning: false,
  isStarted: false,
}

export const TimerContextReducer = (
  state: TimerContextType,
  action: TimerContextActionType,
): TimerContextType => {
  if (action.type === 'START') {
    return { ...state, isRunning: true, isStarted: true }
  }

  if (action.type === 'STOP') {
    return { ...state, isRunning: false }
  }

  if (action.type === 'RESET') {
    const { time } = SEGMENTS[state.currentSegment]

    return {
      ...state,
      isRunning: false,
      isStarted: false,
      time,
    }
  }

  if (action.type === 'TICK') {
    return { ...state, time: state.time - 1 }
  }

  if (action.type === 'SET_SEGMENT') {
    const { time, type } = SEGMENTS[action.payload]

    return { ...INITIAL_VALUES, currentSegment: type, time }
  }

  return state
}
