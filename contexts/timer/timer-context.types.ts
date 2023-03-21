import { SegmentType } from '~/utils/config'

export type TimerContextActionType = {
  type: 'START' | 'STOP' | 'RESET' | 'TICK',
} | {
  type: 'SET_SEGMENT',
  payload: SegmentType,
}

export interface TimerContextType {
  time: number
  totalTime: number
  currentSegment: SegmentType
  isRunning: boolean
  isStarted: boolean
}
