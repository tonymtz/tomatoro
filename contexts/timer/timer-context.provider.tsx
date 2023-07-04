import React, { ReactNode, useCallback, useEffect, useRef } from 'react'

import { useNotificationsContext } from '~/contexts/notifications'
import { useSettingsStore } from '~/stores/settings'
import { useTimerStore } from '~/stores/time'
import { NOTIFICATION } from '~/utils/config'
import { track } from '~/utils/tracking.utils'

export const TimerContext = React.createContext<{
  onStartTimer(): void;
  onStopTimer(): void;
  onResetTimer(): void;
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
  const { reset, setTotalTime, start, stop, tick, time } = useTimerStore()
  const [currentSegment, workLength, shortLength, longLength] = useSettingsStore(state => [
    state.currentSegment,
    state.workLength,
    state.shortLength,
    state.longLength,
  ])

  const onTick = useCallback(() => {
    tick()
  }, [tick])

  const onStartTimer = useCallback(() => {
    if (time < 1) {
      reset()
    }
    start()
    workerRef.current?.postMessage('start')
    track('$timer_start', { segment: currentSegment, time })
  }, [currentSegment, reset, start, time])

  const onStopTimer = useCallback(() => {
    stop()
    workerRef.current?.postMessage('stop')
    track('$timer_stop', { segment: currentSegment, time })
  }, [currentSegment, stop, time])

  const onResetTimer = useCallback(() => {
    reset()
    workerRef.current?.postMessage('stop')
    track('$timer_reset', { segment: currentSegment, time })
  }, [currentSegment, reset, time])

  useEffect(() => {
    if (time < 1) {
      onStopTimer()
      notify(NOTIFICATION)
      track('$timer_end', { segment: currentSegment, time })
    }
  }, [currentSegment, notify, onStopTimer, time])

  const onSegmentChange = useCallback((totalTime: number) => {
    setTotalTime(totalTime)
    onResetTimer()
    track('$segment_change', { segment: currentSegment, time })
  }, [currentSegment, onResetTimer, setTotalTime, time])

  useEffect(() => {
    if (currentSegment === 'WORK') {
      onSegmentChange(workLength)
    } else if (currentSegment === 'SHORT') {
      onSegmentChange(shortLength)
    } else if (currentSegment === 'LONG') {
      onSegmentChange(longLength)
    }
  }, [currentSegment, longLength, onSegmentChange, shortLength, workLength])

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
  }

  return (
    <TimerContext.Provider value={ value }>
      { children }
    </TimerContext.Provider>
  )
}
