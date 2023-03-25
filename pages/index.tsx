import React from 'react'
import { Box, Divider } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { NotificationsWarn } from '~/components/organisms/notifications-warn'
import { GetInTouch } from '~/components/templates/get-in-touch'
import { HowItWorks } from '~/components/templates/how-it-works'
import { Page } from '~/components/templates/page'
import { TimerWithSelector } from '~/components/templates/timer-with-selector'
import { useTimerStore } from '~/stores/time'
import { formatTime } from '~/utils/timer.utils'

export default function Home () {
  const { time, isStarted } = useTimerStore()
  const title = isStarted ? formatTime(time) : undefined

  return (
    <>
      <Page title={ title }>
        <Box pt={ 4 } pb={ 5 }>
          <NotificationsWarn/>
          <TimerWithSelector/>
        </Box>

        <Divider/>

        <Screen id='how-it-works'>
          <HowItWorks/>
        </Screen>

        <Divider/>

        <Screen id='get-in-touch'>
          <GetInTouch/>
        </Screen>
      </Page>
    </>
  )
}