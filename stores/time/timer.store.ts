import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { SEGMENTS, SegmentType } from '~/utils/config'

import { TimerState, TimerStore } from './timer-store.types'

const initialState: TimerState = {
  time: SEGMENTS.WORK.time,
  totalTime: SEGMENTS.WORK.time,
  currentSegment: SEGMENTS.WORK.type,
  isRunning: false,
  isStarted: false,
}

export const useTimerStore = create(
  devtools<TimerStore>(
    (set) => ({
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
    }),
    {
      name: 'Timer',
    }
  )
)
