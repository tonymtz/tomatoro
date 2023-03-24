import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { TimerActionsType, TimerStateType } from '~/contexts/timer'
import { SEGMENTS } from '~/utils/config'

export const initialState: TimerStateType = {
  time: SEGMENTS.WORK.time,
  totalTime: SEGMENTS.WORK.time,
  currentSegment: SEGMENTS.WORK.type,
  isRunning: false,
  isStarted: false,
}

export const useTimerStore = create(devtools<TimerStateType & TimerActionsType>(
  (set) => ({
    ...initialState,

    tick: () => set((state) => ({
      time: state.time - 1,
    })),

    start: () => set(() => ({
      isRunning: true,
      isStarted: true,
    })),

    stop: () => set(() => ({
      isRunning: false,
    })),

    reset: () => set((state) => ({
      isRunning: false,
      isStarted: false,
      time: state.totalTime,
    })),

    setSegment: (nextSegment) => set(() => {
      const { time, type } = SEGMENTS[nextSegment]

      return ({
        currentSegment: type,
        totalTime: time,
        time,
      })
    }),
  })
))

export const useTimerState = () => useTimerStore((state) => ({
  time: state.time,
  totalTime: state.totalTime,
  currentSegment: state.currentSegment,
  isRunning: state.isRunning,
  isStarted: state.isStarted,
}))
