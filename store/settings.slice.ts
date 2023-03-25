import { StateCreator } from 'zustand'

import { ComposedStore, SettingsStore, SettingsSlice } from '~/store/store.types'
import { SEGMENTS } from '~/utils/config'

export const initialState: SettingsStore = {
  workLength: SEGMENTS.WORK.time,
  shortLength: SEGMENTS.SHORT.time,
  longLength: SEGMENTS.LONG.time,
  showTimer: true,
  showNotifications: true,
  playSound: true,
}

export const createSettingsSlice: StateCreator<
  ComposedStore,
  [['zustand/devtools', never]],
  [],
  SettingsSlice
> = (set) => ({
  ...initialState,

  updateTimerSetting: (payload: Pick<SettingsStore, 'workLength' & 'shortLength' & 'longLength'>) => set(
    () => ({ ...payload }),
    false,
    { type: 'settings/updateTimerSetting', ...payload }
  ),

  updateAppSetting: (payload: Pick<SettingsStore, 'showTimer' & 'showNotifications' & 'playSound'>) => set(
    () => ({ ...payload }),
    false,
    { type: 'settings/updateAppSetting', ...payload }
  ),
})
