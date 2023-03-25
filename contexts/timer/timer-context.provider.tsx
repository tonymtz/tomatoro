import React, { ReactNode, useCallback, useEffect, useRef } from 'react'

import { useNotificationsContext } from '~/contexts/notifications'
import { useComposedStore } from '~/store'
import { SegmentType } from '~/utils/config'

export const TimerContext = React.createContext<{
  onStartTimer(): void;
  onStopTimer(): void;
  onResetTimer(): void;
  onUpdateSegment(_: SegmentType): void;
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
  const { notify } = useNotificationsContext()
  const { time, tick, start, stop, reset, setSegment } = useComposedStore()

  const onTick = useCallback(() => {
    tick()
  }, [tick])

  const onStartTimer = useCallback(() => {
    start()
    workerRef.current?.postMessage('start')
  }, [start])

  const onStopTimer = useCallback(() => {
    stop()
    workerRef.current?.postMessage('stop')
  }, [stop])

  const onResetTimer = useCallback(() => {
    reset()
    workerRef.current?.postMessage('stop')
  }, [reset])

  const onUpdateSegment = useCallback((segmentType: SegmentType) => {
    setSegment(segmentType)
    workerRef.current?.postMessage('stop')
  }, [setSegment])

  useEffect(() => {
    if (time < 1) {
      onStopTimer()
      notify({ title: 'Time is up!' })
    }
  }, [notify, onStopTimer, time])

  const workerRef = useRef<Worker>()

  useEffect(() => {
    workerRef.current = new Worker(new URL('~/utils/worker.ts', import.meta.url))

    workerRef.current.onmessage = (event: MessageEvent<string>) => {
      if (event.data === 'tick') {
        onTick()
      }
    }

    return () => {
      workerRef.current?.terminate()
    }
  }, [onTick])

  const value = {
    onStartTimer,
    onStopTimer,
    onResetTimer,
    onUpdateSegment,
  }

  return (
    <TimerContext.Provider value={ value }>
      { children }
    </TimerContext.Provider>
  )
}
