import React from 'react'
import { Button } from 'theme-ui'

import { Settings } from '~/components/templates/settings'
import { SEGMENTS } from '~/utils/config'

import { Container } from './timer-selector.styles'

export const TimeSelectorSkeleton = () => (
  <Container>
    { Object.entries(SEGMENTS).map(([key, value]) => (
      <Button
        key={ key }
        disabled={ key === 'WORK' }
      >
        { value.name } ({ value.time / 60 })
      </Button>
    )) }
    <Settings>
      { (openSettings) => (
        <Button onClick={ openSettings }>Settings</Button>) }
    </Settings>
  </Container>
)
