import { FC } from 'react'

import { Timer } from '~/components/organisms/timer'
import { TimeSelector } from '~/components/organisms/timer-selector'

import { Container } from './timer-with-selector.styles'

export const TimerWithSelector: FC = () => (
  <Container gap={2} columns={[2, '2fr 1fr']}>
    <Timer />
    <TimeSelector />
  </Container>
)
