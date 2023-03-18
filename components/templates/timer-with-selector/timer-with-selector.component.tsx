import { FC } from 'react'

import { Timer } from '~/components/organisms/timer'
import { TimeSelector } from '~/components/organisms/timer-selector'

import { Col, Container } from './timer-with-selector.styles'

interface Props {
}

export const TimerWithSelector: FC<Props> = () => {
  return (
    <Container>
      <Col>
        <Timer />
      </Col>
      <Col>
        <TimeSelector />
      </Col>
    </Container>
  )
}
