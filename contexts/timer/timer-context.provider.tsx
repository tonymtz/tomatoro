import React, { ReactNode, useCallback, useEffect, useReducer, useRef } from 'react'

import { SegmentType } from '~/utils/config'

import { INITIAL_VALUES, TimerContextReducer } from './timer-context.reducer'
import { TimerContextType } from './timer-context.types'

export const TimerContext = React.createContext<{
  state: TimerContextType;
  resetTimer(): void,
  setSegment(param: SegmentType): void;
  startTimer(): void;
  stopTimer(): void;
} | undefined>(undefined)

export const useTimerContext = () => {
  const context = React.useContext(TimerContext)

  if (context === undefined) {
    throw new Error(
      'useTimerContext must be used within a TimerContextType.Provider',
    )
  }

  return context
}

export const TimerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(
    TimerContextReducer,
    INITIAL_VALUES,
  )

  const tick = useCallback(() => {
    dispatch({ type: 'TICK' })
  }, [])

  const startTimer = useCallback(() => {
    dispatch({ type: 'START' })
    workerRef.current?.postMessage('start')
  }, [])

  const stopTimer = useCallback(() => {
    dispatch({ type: 'STOP' })
    workerRef.current?.postMessage('stop')
  }, [])

  const resetTimer = useCallback(() => {
    dispatch({ type: 'RESET' })
    workerRef.current?.postMessage('stop')
  }, [])

  const setSegment = useCallback((segmentType: SegmentType) => {
    dispatch({ type: 'SET_SEGMENT', payload: segmentType })
    workerRef.current?.postMessage('stop')
  }, [])

  const value = {
    state,
    startTimer,
    stopTimer,
    resetTimer,
    setSegment,
  }

  useEffect(() => {
    if (state.time < 1) {
      stopTimer()
    }
  }, [state.time, stopTimer])

  const workerRef = useRef<Worker>()

  useEffect(() => {
    workerRef.current = new Worker(new URL('~/utils/worker.ts', import.meta.url))

    workerRef.current.onmessage = (event: MessageEvent<string>) => {
      if (event.data === 'tick') {
        tick()
      }
    }

    return () => {
      workerRef.current?.terminate()
    }
  }, [tick])

  return (
    <TimerContext.Provider value={ value }>
      { children }
    </TimerContext.Provider>
  )
}
