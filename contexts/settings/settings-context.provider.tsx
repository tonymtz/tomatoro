import React from 'react'

import { SettingsContext, SettingsStaticContext } from './notifications-context.types'

const initialValues: SettingsStaticContext = {
  workLength: 25,
  shortLength: 5,
  longLength: 15,
  showNotifications: true,
  showTimer: true,
  playSound: true,
}

export const SettingsContextInstance = React.createContext<SettingsContext | undefined>(undefined)

export const useSettingsContext = () => {
  const context = React.useContext(SettingsContextInstance)

  if (context === undefined) {
    throw new Error(
      'useSettingsContext must be used within a SettingsContext.Provider',
    )
  }

  return context
}

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = React.useState<SettingsStaticContext>()

  const updateSettings = (payload: Partial<SettingsStaticContext>) => {
    setSettings(snapshot => {
      return {
        ...initialValues,
        ...snapshot,
        ...payload,
      }
    })
  }

  const value = {
    workLength: settings?.workLength || 25,
    shortLength: settings?.shortLength || 5,
    longLength: settings?.longLength || 15,
    showNotifications: settings?.showNotifications || true,
    showTimer: settings?.showTimer || true,
    playSound: settings?.playSound || true,
    updateSettings,
  }

  return (
    <SettingsContextInstance.Provider value={ value }>
      { children }
    </SettingsContextInstance.Provider>
  )
}
