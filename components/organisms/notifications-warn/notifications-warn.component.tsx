import useTranslation from 'next-translate/useTranslation'
import { Button, Text } from 'theme-ui'

import { useNotificationsContext } from '~/contexts/notifications'
import { track } from '~/utils/tracking.utils'

import { Frame } from './notifications-warn.styles'

export const NotificationsWarn = () => {
  const { t } = useTranslation('common')
  const { hasPermissions, requestPermission } = useNotificationsContext()

  if (hasPermissions) {
    return null
  }

  const onClick = () => {
    track('$notifications_requested')
    requestPermission()
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
        onClick={ onClick }>
        { t('notifications.cta') }
      </Button>
    </Frame>
  )
}
