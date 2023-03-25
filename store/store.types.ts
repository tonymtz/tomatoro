import { SegmentType } from '~/utils/config'

export interface TimerStore {
  currentSegment: SegmentType
  isRunning: boolean
  isStarted: boolean
  time: number
  totalTime: number
}

export interface TimerActions {
  reset(): void

  setSegment(param: SegmentType): void

  start(): void

  stop(): void

  tick(): void
}

export interface SettingsStore {
  workLength: number
  shortLength: number
  longLength: number
  showTimer: boolean
  showNotifications: boolean
  playSound: boolean
}

export interface SettingsActions {
  updateTimerSetting(payload: Pick<SettingsStore, 'workLength' & 'shortLength' & 'longLength' >): void
  updateAppSetting(payload: Pick<SettingsStore, 'showTimer' & 'showNotifications' & 'playSound' >): void
}

export type TimerSlice = TimerStore & TimerActions

export type SettingsSlice = SettingsStore & SettingsActions

export type ComposedStore = TimerSlice & SettingsSlice
