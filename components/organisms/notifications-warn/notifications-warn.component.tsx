import { Box } from '~/components/atoms/box'
import { Button } from '~/components/atoms/button'
import { Frame } from '~/components/organisms/notifications-warn/notifications-warn.styles'
import { useNotificationsContext } from '~/contexts/notifications/notifications-context.provider'

export const NotificationsWarn = () => {
  const { hasPermissions } = useNotificationsContext()

  if (hasPermissions) {
    return null
  }

  return (
    <Frame>
      <Box m={1}>
        Tomatoro requires notifications
      </Box>
      <Button onClick={ () => {
      } }>Fix</Button>
    </Frame>
  )
}
