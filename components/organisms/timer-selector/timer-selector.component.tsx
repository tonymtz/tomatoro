import { useTimerContext } from '~/contexts/timer'
import { SEGMENTS, SegmentType } from '~/utils/config'

import { Container, InlineList } from './timer-selector.styles'

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
      <InlineList>
        { Object.entries(SEGMENTS).map(([key, value]) => (
          <li key={ key }>
            <button
              onClick={ () => onSelect(key as SegmentType) }
              disabled={ currentSegment === key }
            >
              { value.name }
              ({ value.time / 60 })
            </button>
          </li>
        )) }
      </InlineList>
    </Container>
  )
}
