export type SettingsStaticContext = {
  workLength: number
  shortLength: number
  longLength: number
  showTimer: boolean
  showNotifications: boolean
  playSound: boolean
}

export type SettingsContext = SettingsStaticContext & {
  updateSettings(payload: Partial<SettingsStaticContext>): void
}
