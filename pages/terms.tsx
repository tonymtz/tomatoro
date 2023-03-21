import React from 'react'
import { Divider, Grid, Heading, Paragraph } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { Page } from '~/components/templates/page'
import { useTimerContext } from '~/contexts/timer'
import { formatTime } from '~/utils/timer.utils'

export default function Terms () {
  const { state: { isStarted, time } } = useTimerContext()
  const title = isStarted ? formatTime(time) : undefined

  return (
    <>
      <Page title={ title }>
        <Screen>
          <Grid variant='contained' gap={ 5 }>
            <Heading>Terms of service</Heading>
            <Paragraph>
              This is a simple timer app that allows you to set a timer for a specific amount of time.
            </Paragraph>
          </Grid>
        </Screen>

        <Divider/>
      </Page>
    </>
  )
}
