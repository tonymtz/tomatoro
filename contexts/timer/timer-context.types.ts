import { SegmentType } from '~/utils/config'

export interface TimerStateType {
  currentSegment: SegmentType
  isRunning: boolean
  isStarted: boolean
  time: number
  totalTime: number
}

export interface TimerActionsType {
  reset(): void

  setSegment(param: SegmentType): void

  start(): void

  stop(): void

  tick(): void
}
