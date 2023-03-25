import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { ComposedStore } from '~/store/store.types'

import { createSettingsSlice } from './settings.slice'
import { createTimerSlice } from './timer.slice'

export const useComposedStore = create(devtools<ComposedStore>(
  (...a) => ({
    ...createSettingsSlice(...a),
    ...createTimerSlice(...a),
  })
))

export * from './store.types'
