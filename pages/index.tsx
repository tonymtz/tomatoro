import React from 'react'

import { Screen } from '~/components/atoms/screen'
import { NotificationsWarn } from '~/components/organisms/notifications-warn'
import { Page } from '~/components/templates/page'
import { TimerWithSelector } from '~/components/templates/timer-with-selector'
import { useTimerContext } from '~/contexts/timer'
import { formatTime } from '~/utils/timer.utils'

export default function Home () {
  const { state: { isStarted, time } } = useTimerContext()
  const title = isStarted ? formatTime(time) : undefined

  return (
    <>
      <Page title={ title }>
        <Screen>
          <NotificationsWarn/>
          <TimerWithSelector/>
        </Screen>
      </Page>
    </>
  )
}
