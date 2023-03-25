import { StateCreator } from 'zustand'

import { ComposedStore, TimerStore, TimerSlice } from '~/store/store.types'
import { SEGMENTS, SegmentType } from '~/utils/config'

export const initialState: TimerStore = {
  time: SEGMENTS.WORK.time,
  totalTime: SEGMENTS.WORK.time,
  currentSegment: SEGMENTS.WORK.type,
  isRunning: false,
  isStarted: false,
}

export const createTimerSlice: StateCreator<
  ComposedStore,
  [['zustand/devtools', never]],
  [],
  TimerSlice
> = (set) => ({
  ...initialState,

  tick: () => set(
    (state) => ({
      time: state.time - 1,
    }),
    false,
    'timer/tick'
  ),

  start: () => set(
    () => ({
      isRunning: true,
      isStarted: true,
    }),
    false,
    'timer/start'
  ),

  stop: () => set(
    () => ({
      isRunning: false,
    }),
    false,
    'timer/stop'
  ),

  reset: () => set(
    (state) => ({
      isRunning: false,
      isStarted: false,
      time: state.totalTime,
    }),
    false,
    'timer/reset'
  ),

  setSegment: (nextSegment: SegmentType) => set(
    () => {
      const { time, type } = SEGMENTS[nextSegment]

      return ({
        currentSegment: type,
        totalTime: time,
        time,
      })
    },
    false,
    { type: 'timer/setSegment', nextSegment }
  ),
})
