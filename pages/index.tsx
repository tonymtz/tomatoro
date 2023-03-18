import React from 'react'

import { formatTime } from '~/components/organisms/timer/timer.utils'
import { Page } from '~/components/templates/page'
import { TimerWithSelector } from '~/components/templates/timer-with-selector/timer-with-selector.component'
import { useTimerContext } from '~/contexts/timer'

export default function Home () {
  const { state: { isStarted, time } } = useTimerContext()
  const title = isStarted ? formatTime(time) : undefined

  return (
    <>
      <Page title={ title }>
        <TimerWithSelector/>
      </Page>
    </>
  )
}
