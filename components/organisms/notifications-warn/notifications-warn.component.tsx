import { Button, Text } from 'theme-ui'

import { useNotificationsContext } from '~/contexts/notifications'

import { Frame } from './notifications-warn.styles'

export const NotificationsWarn = () => {
  const { hasPermissions, requestPermission } = useNotificationsContext()

  if (hasPermissions) {
    return null
  }

  return (
    <Frame variant='warn'>
      <Text>
        Can we send you notifications?<br />
        We&apos;ll let you know when your cycle finishes.
      </Text>
      <Button
        sx={ {
          height: 'fit-content',
        } }
        onClick={ () => requestPermission() }>Fix</Button>
    </Frame>
  )
}
