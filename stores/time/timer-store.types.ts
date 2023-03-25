import { SegmentType } from '~/utils/config'

export interface TimerState {
  currentSegment: SegmentType
  isRunning: boolean
  isStarted: boolean
  time: number
  totalTime: number
}

export interface TimerStore extends TimerState {
  reset(): void

  setSegment(param: SegmentType): void

  start(): void

  stop(): void

  tick(): void
}
