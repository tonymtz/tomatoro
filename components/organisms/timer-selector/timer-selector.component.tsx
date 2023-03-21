import { Button } from 'theme-ui'

import { useTimerContext } from '~/contexts/timer'
import { SEGMENTS, SegmentType } from '~/utils/config'

import { Container } from './timer-selector.styles'

export const TimeSelector = () => {
  const {
    state: { currentSegment },
    setSegment,
  } = useTimerContext()

  const onSelect = (newSegment: SegmentType) => {
    setSegment(newSegment)
  }

  return (
    <Container>
      { Object.entries(SEGMENTS).map(([key, value]) => (
        <Button
          key={ key }
          onClick={ () => onSelect(key as SegmentType) }
          disabled={ currentSegment === key }
          sx={ {
            width: 'fit-content',
          } }
        >
          { value.name } ({ value.time / 60 })
        </Button>
      )) }

    </Container>
  )
}
