import { useCallback, useEffect, useRef, useState } from 'react'

import { SEGMENTS } from '~/utils/config'

const INITIAL_TIME = SEGMENTS.WORK.value

export const useTimerHooks = (initialTime = INITIAL_TIME) => {
  const [time, setTime] = useState<number>(initialTime)
  const workerRef = useRef<Worker>()

  useEffect(() => {
    if (time < 1) {
      workerRef.current?.postMessage('stop')
    }
  }, [time])

  useEffect(() => {
    workerRef.current = new Worker(new URL('~/utils/worker.ts', import.meta.url))

    workerRef.current.onmessage = (event: MessageEvent<string>) => {
      setTime((time) => {
        if (event.data === 'tick') {
          return time > 0 ? time - 1 : time
        }
        return 0
      })
    }

    return () => {
      workerRef.current?.terminate()
    }
  }, [])

  const onStart = useCallback(async () => {
    workerRef.current?.postMessage('start')
  }, [])

  const onStop = useCallback(async () => {
    workerRef.current?.postMessage('stop')
  }, [])

  const onReset = useCallback(async () => {
    workerRef.current?.postMessage('stop')
    setTime(initialTime)
  }, [initialTime])

  return {
    time,
    onStart,
    onStop,
    onReset,
  }
}
