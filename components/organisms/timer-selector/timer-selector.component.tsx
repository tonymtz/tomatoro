import React, { useMemo } from 'react'
import { Button, Grid } from 'theme-ui'

import { Settings } from '~/components/templates/settings'
import { useTimerContext } from '~/contexts/timer'
import { useSettingsStore } from '~/stores/settings'
import { SEGMENTS, SegmentType } from '~/utils/config'

export const TimeSelector = () => {
  const { currentSegment, longLength, setSegment, shortLength, workLength } = useSettingsStore()
  const { onStopTimer } = useTimerContext()

  const composedSegments = useMemo(() => ({
    WORK: { ...SEGMENTS.WORK, time: workLength },
    SHORT: { ...SEGMENTS.SHORT, time: shortLength },
    LONG: { ...SEGMENTS.LONG, time: longLength },
  }), [longLength, shortLength, workLength])

  const onSelect = (newSegment: SegmentType) => {
    onStopTimer()
    setSegment(newSegment)
  }

  return (
    <Grid columns={ [2, 4] } gap={[2,2]}>
      { Object.entries(composedSegments).map(([key, value]) => (
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
    </Grid>
  )
}
