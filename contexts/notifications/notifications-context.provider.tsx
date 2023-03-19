import React, { useEffect } from 'react'

export const NotificationsContext = React.createContext<{
  hasPermissions: boolean
} | undefined>(undefined)

export const useNotificationsContext = () => {
  const context = React.useContext(NotificationsContext)

  if (context === undefined) {
    throw new Error(
      'useNotificationsContext must be used within a NotificationsContext.Provider',
    )
  }

  return context
}

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hasPermissions, setHasPermissions] = React.useState<boolean>(false)

  useEffect(() => {
    setHasPermissions(Notification.permission === 'granted')
  }, [])

  function checkNotificationPromise () {
    try {
      Notification.requestPermission().then()
    } catch (e) {
      return false
    }

    return true
  }

  // useEffect(() => {
  //   const is = checkNotificationPromise()
  //   console.log(is)
  // })

  const value = {
    hasPermissions,
  }

  return (
    <NotificationsContext.Provider
      value={ value }
    >
      { children }
    </NotificationsContext.Provider>
  )
}
