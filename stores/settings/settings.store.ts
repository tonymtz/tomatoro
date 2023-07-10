import { create, useStore } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { SEGMENTS, SegmentType } from '~/utils/config'

import { SettingsState, SettingsStore } from './settings-store.types'

const initialState: SettingsState = {
  workLength: SEGMENTS.WORK.time,
  shortLength: SEGMENTS.SHORT.time,
  longLength: SEGMENTS.LONG.time,
  showTimer: true,
  showNotifications: true,
  playSound: true,
  currentSegment: SEGMENTS.WORK.type,
  themePreference: 'light',
}

const settingsStore = create<
  SettingsStore,
  [
    ['zustand/devtools', never],
    ['zustand/persist', SettingsState],
  ]
>(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        updateTimerSetting: (payload: Pick<SettingsStore, 'workLength' | 'shortLength' | 'longLength'>) => set(
          () => ({ ...payload }),
          false,
          { type: 'settings/updateTimerSetting', ...payload },
        ),

        updateAppSetting: (payload: Pick<SettingsStore, 'showTimer' | 'showNotifications' | 'playSound'>) => set(
          () => ({ ...payload }),
          false,
          { type: 'settings/updateAppSetting', ...payload },
        ),

        setThemePreference: (themePreference: string) => set(
          () => {
            const nextThemePreference = themePreference === 'light' ? 'light' : 'dark'

            return ({
              themePreference: nextThemePreference,
            })
          },
          false,
          { type: 'settings/setThemePreference', themePreference}
        ),
        setSegment: (nextSegment: SegmentType) => set(
          () => {
            const { time, type } = SEGMENTS[nextSegment]

            return ({
              currentSegment: type,
              totalTime: time,
              time,
            })
          },
          false,
          { type: 'timer/setSegment', nextSegment },
        ),

        resetSetting: () => set(
          () => ({ ...initialState }),
          false,
          { type: 'settings/resetSetting' },
        ),
      }),
      {
        name: 'settings',
      },
    ),
  ),
)

// bounded stored
export function useSettingsStore (): SettingsStore
export function useSettingsStore<T> (
  selector: (state: SettingsStore) => T,
  equals?: (a: T, b: T) => boolean,
): T
export function useSettingsStore<T> (
  selector?: (state: SettingsStore) => T,
  equals?: (a: T, b: T) => boolean,
) {
  return useStore(settingsStore, selector!, equals)
}
