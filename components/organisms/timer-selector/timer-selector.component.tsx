import { useState } from 'react'

import { SEGMENTS } from '~/utils/config'

import { Container, InlineList } from './timer-selector.styles'

export const TimeSelector = () => {
  const [selected, setSelected] = useState(SEGMENTS.WORK)

  return (
    <Container>
      <InlineList>
        { Object.entries(SEGMENTS).map(([key, value]) => (
          <li key={ key }>
            <button onClick={ () => setSelected(value) }>
              { value.name }
            </button>
          </li>
        )) }
      </InlineList>
    </Container>
  )
}
