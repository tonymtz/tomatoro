import { GetServerSideProps } from 'next'
import React from 'react'
import { Box, Divider } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { FeedbackCta } from '~/components/organisms/feedback-cta'
import { NotificationsWarn } from '~/components/organisms/notifications-warn'
import { GetInTouch } from '~/components/templates/get-in-touch'
import { HowItWorks } from '~/components/templates/how-it-works'
import { Page } from '~/components/templates/page'
import { TimerWithSelector } from '~/components/templates/timer-with-selector'
import { useSettingsStore } from '~/stores/settings'
import { useTimerStore } from '~/stores/time'
import { getBanners } from '~/utils/cms.api'
import { formatTime } from '~/utils/timer.utils'

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  const banners = await getBanners('home')
  return { props: { banners } }
}

export default function Home ({ banners }: { banners: Banner[] }) {
  const [isStarted, time] = useTimerStore(state => [state.isStarted, state.time])
  const showTimer = useSettingsStore(state => state.showTimer)
  const title = showTimer && isStarted ? formatTime(time) : undefined

  return (
    <Page subtitle={ title } banners={ banners }>
      <Box pt={ 4 } pb={ 5 }>
        <NotificationsWarn/>
        <TimerWithSelector/>
      </Box>

      <Divider/>

      <Screen id="how-it-works">
        <HowItWorks/>
      </Screen>

      <Divider/>

      <Screen id="get-in-touch">
        <GetInTouch/>
      </Screen>

      <FeedbackCta />
    </Page>
  )
}
