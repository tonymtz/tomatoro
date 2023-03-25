import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { SEGMENTS } from '~/utils/config'

import { SettingsState, SettingsStore } from './settings-store.types'

const initialState: SettingsState = {
  workLength: SEGMENTS.WORK.time,
  shortLength: SEGMENTS.SHORT.time,
  longLength: SEGMENTS.LONG.time,
  showTimer: true,
  showNotifications: true,
  playSound: true,
}

export const useSettingsStore = create(
  devtools<SettingsStore>(
    (set) => ({
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
    }),
    {
      name: 'Settings',
      serialize: true,
    }
  )
)
