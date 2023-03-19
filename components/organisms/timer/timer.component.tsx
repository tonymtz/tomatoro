import { FC } from 'react'
import { Button } from 'theme-ui'

import { useTimerContext } from '~/contexts/timer'

import { Container, Controls, Display } from './timer.styles'
import { formatTime } from './timer.utils'

export const Timer: FC = () => {
  const { state, startTimer, stopTimer, resetTimer } = useTimerContext()

  const onToggleClick = () => {
    if (!state.isStarted) {
      startTimer()
    }
    if (state.isRunning) {
      stopTimer()
    } else {
      startTimer()
    }
  }

  const onStopClick = () => {
    resetTimer()
  }

  return (
    <Container>
      <Display>{ formatTime(state.time) }</Display>
      <Controls>
        <Button onClick={ onStopClick } disabled={ !state.isStarted }>Done</Button>
        <Button
          onClick={ onToggleClick }
          // variant={ state.isRunning ? 'yellow' : 'green' }
        >
          { state.isRunning ? 'Pause' : 'Start' }
        </Button>
      </Controls>
    </Container>
  )
}
