import React from 'react'
import { Button } from 'theme-ui'

import { Settings } from '~/components/templates/settings'
import { useTimerContext } from '~/contexts/timer'
import { useTimerStore } from '~/stores/time'
import { SEGMENTS, SegmentType } from '~/utils/config'

import { Container } from './timer-selector.styles'

export const TimeSelector = () => {
  const { currentSegment } = useTimerStore()
  const { onUpdateSegment, onStopTimer } = useTimerContext()

  const onSelect = (newSegment: SegmentType) => {
    onStopTimer()
    onUpdateSegment(newSegment)
  }

  return (
    <Container>
      { Object.entries(SEGMENTS).map(([key, value]) => (
        <Button
          key={ key }
          onClick={ () => onSelect(key as SegmentType) }
          disabled={ currentSegment === key }
        >
          { value.name } ({ value.time / 60 })
        </Button>
      )) }
      <Settings>
        { (openSettings) => (<Button onClick={ openSettings }>Settings</Button>) }
      </Settings>
    </Container>
  )
}
