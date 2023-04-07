import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { SEGMENTS } from '~/utils/config'

import { TimerState, TimerStore } from './timer-store.types'

const initialState: TimerState = {
  time: SEGMENTS.WORK.time,
  totalTime: SEGMENTS.WORK.time,
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
        'timer/tick',
      ),

      start: () => set(
        () => ({
          isRunning: true,
          isStarted: true,
        }),
        false,
        'timer/start',
      ),

      stop: () => set(
        () => ({
          isRunning: false,
        }),
        false,
        'timer/stop',
      ),

      reset: () => set(
        (state) => ({
          isRunning: false,
          isStarted: false,
          time: state.totalTime,
        }),
        false,
        'timer/reset',
      ),

      setTotalTime: (totalTime: number) => set(
        () => ({ totalTime }),
        false,
        { type: 'timer/setTotalTime', totalTime },
      ),
    }),
    {
      name: 'Timer',
    },
  ),
)
