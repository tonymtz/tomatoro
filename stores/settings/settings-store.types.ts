import { SegmentType } from '~/utils/config'

export interface SettingsState {
  currentSegment: SegmentType
  workLength: number
  shortLength: number
  longLength: number
  showTimer: boolean
  showNotifications: boolean
  playSound: boolean
}

export interface SettingsStore extends SettingsState {
  updateTimerSetting(payload: Pick<SettingsStore, 'workLength' & 'shortLength' & 'longLength'>): void

  updateAppSetting(payload: Pick<SettingsStore, 'showTimer' & 'showNotifications' & 'playSound'>): void

  setSegment(param: SegmentType): void

  resetSetting(): void
}
