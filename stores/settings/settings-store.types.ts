export interface SettingsState {
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
}
