import useTranslation from 'next-translate/useTranslation'
import { Button, Text } from 'theme-ui'

import { useNotificationsContext } from '~/contexts/notifications'

import { Frame } from './notifications-warn.styles'

export const NotificationsWarn = () => {
  const { t } = useTranslation('common')
  const { hasPermissions, requestPermission } = useNotificationsContext()

  if (hasPermissions) {
    return null
  }

  return (
    <Frame variant="warn">
      <Text>
        { t('notifications.lineOne') }<br/>
        { t('notifications.lineTwo') }
      </Text>
      <Button
        sx={ {
          height: 'fit-content',
        } }
        onClick={ () => requestPermission() }>
        { t('notifications.cta') }
      </Button>
    </Frame>
  )
}
