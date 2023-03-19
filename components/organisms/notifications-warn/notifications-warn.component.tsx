import { Button } from 'theme-ui'

import { Text } from '~/components/atoms/text'
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
        ¿Nos permites enviarte notificaciones de alarma?<br />
        Así te avisaremos cuando termine tu ciclo.
      </Text>
      <Button
        sx={ {
          height: 'fit-content',
        } }
        onClick={ () => requestPermission() }>Arreglarlo</Button>
    </Frame>
  )
}
