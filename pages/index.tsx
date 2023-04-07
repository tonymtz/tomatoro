import dynamic from 'next/dynamic'
import React from 'react'
import { Box, Divider } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { NotificationsWarn } from '~/components/organisms/notifications-warn'
import { GetInTouch } from '~/components/templates/get-in-touch'
import { HowItWorks } from '~/components/templates/how-it-works'
import { Page } from '~/components/templates/page'
import { TimerWithSelector } from '~/components/templates/timer-with-selector'
import { useSettingsStore } from '~/stores/settings'
import { useTimerStore } from '~/stores/time'
import { formatTime } from '~/utils/timer.utils'

type TimerWithSelectorPropsType = JSX.LibraryManagedAttributes<
  typeof TimerWithSelector,
  React.ComponentProps<typeof TimerWithSelector>
>

const DynamicTimerWithSelector = dynamic<TimerWithSelectorPropsType>(
  () => import('~/components/templates/timer-with-selector')
    .then(mod => mod.TimerWithSelector),
  {
    ssr: false,
  },
)

export default function Home () {
  const [isStarted, time] = useTimerStore(state => [state.isStarted, state.time])
  const showTimer = useSettingsStore(state => state.showTimer)
  const title = showTimer && isStarted ? formatTime(time) : undefined

  return (
    <>
      <Page title={ title }>
        <Box pt={ 4 } pb={ 5 }>
          <NotificationsWarn/>
          <DynamicTimerWithSelector/>
        </Box>

        <Divider/>

        <Screen id="how-it-works">
          <HowItWorks/>
        </Screen>

        <Divider/>

        <Screen id="get-in-touch">
          <GetInTouch/>
        </Screen>
      </Page>
    </>
  )
}
