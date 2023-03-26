import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

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
        { type: 'timer/setSegment', nextSegment }
      ),
    }),
    {
      name: 'Settings',
    }
  )
)
